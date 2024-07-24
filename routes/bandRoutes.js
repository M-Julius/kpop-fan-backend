const express = require('express');
const {
  createBand,
  deleteBand,
  getBands,
  updateBand,
  getBand,
} = require('../controllers/bandController');
const authMiddleware = require('../config/middleware');
const upload = require('../config/multer');

const router = express.Router();

router.post('/', authMiddleware, upload.array('photos', 10), createBand);
router.get('/', getBands);
router.get('/:id', getBand);
router.put('/:id', authMiddleware, upload.array('photos', 10), updateBand);
router.delete('/:id', authMiddleware, deleteBand);

module.exports = router;
