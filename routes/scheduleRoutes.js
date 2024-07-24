const express = require('express');
const { createSchedule, getSchedules, updateSchedule, deleteSchedule } = require('../controllers/scheduleController');
const authMiddleware = require('../config/middleware');

const router = express.Router();

router.post('/', authMiddleware, createSchedule);
router.get('/', getSchedules);
router.put('/:id', authMiddleware, updateSchedule);
router.delete('/:id', authMiddleware, deleteSchedule);

module.exports = router;
