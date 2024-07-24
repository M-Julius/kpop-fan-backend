const express = require('express');
const {
    createEvent,
    deleteEvent,
    updateEvent,
    getEvents,
    getEvent,
} = require('../controllers/eventController');
const authMiddleware = require('../config/middleware');
const upload = require('../config/multer');

const router = express.Router();

router.post('/', authMiddleware, upload.array('photos', 10), createEvent);
router.get('/', getEvents);
router.get('/:id', getEvent);
router.put('/:id', authMiddleware, upload.array('photos', 10), updateEvent);
router.delete('/:id', authMiddleware, deleteEvent);

module.exports = router;
