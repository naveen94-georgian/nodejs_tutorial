const express = require('express');
const router = express.Router();

const path = require('path');
const baseDir = require('../util/path');

router.get('/users', (req, res) => {
    res.sendFile(path.join(baseDir, 'views', 'users.html'));
});

router.get('/', (req, res) => {
   res.sendFile(path.join(baseDir, 'views', 'hello-world.html'));
});

module.exports = router;