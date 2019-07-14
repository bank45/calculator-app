const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/calculator', (req, res, next) => {
    res.render('calc')
})

module.exports = router