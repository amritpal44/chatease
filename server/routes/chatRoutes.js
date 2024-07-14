const express = require('express');
const { fetchMessages, postMessage } = require('../controllers/messageController');
const router = express.Router();

router.get("/getMessages", fetchMessages);
router.post("/postMessage", postMessage);

module.exports = router;