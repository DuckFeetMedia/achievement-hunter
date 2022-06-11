const express = require('express');
const router = express.Router();

const fs = require('fs');


router.get('/data', (req, res) => {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);

    res.end(JSON.stringify(data));
})

router.post('/addData', (req, res) => {
    res.end('--')
})

module.exports = router;