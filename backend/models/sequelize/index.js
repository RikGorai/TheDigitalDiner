const sequelize = require('../config/sequelize');
const User = require('./user.model');
const Order = require('./order.model');

const initModels = async () => {
    await sequelize.sync({ alter: true });
    console.log("✅ PostgreSQL models synced");
};

module.exports = {
    sequelize,
    initModels,
    User,
    Order
};
