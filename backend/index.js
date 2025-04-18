require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectMongo = require('./config/mongo');
const { sequelize, initModels } = require('./models');

// Routes
const authRoutes = require('./routes/auth.routes');
const menuRoutes = require('./routes/menu.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectMongo();
    await initModels();
    console.log(`Server running at http://localhost:${PORT}`);
});
