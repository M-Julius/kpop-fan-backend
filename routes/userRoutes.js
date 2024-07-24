const express = require('express');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../config/middleware');

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.post('/', authMiddleware, createUser);
router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
