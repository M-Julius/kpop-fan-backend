const express = require('express');
const authRoutes = require('./authRoutes');
const bandRoutes = require('./bandRoutes');
const eventRoutes = require('./eventRoutes');
const scheduleRoutes = require('./scheduleRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/bands', bandRoutes);
router.use('/events', eventRoutes);
router.use('/schedules', scheduleRoutes);
router.use('/home', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;
