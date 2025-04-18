const MenuItem = require('../models/mongodb/menu.model');

exports.getAllMenuItems = async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch menu", details: err.message });
    }
};

exports.getMenuItemById = async (req, res) => {
    try {
        const item = await MenuItem.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: "Error fetching item", details: err.message });
    }
};

exports.addMenuItem = async (req, res) => {
    try {
        const newItem = new MenuItem(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item added", item: newItem });
    } catch (err) {
        res.status(400).json({ error: "Add failed", details: err.message });
    }
};
