const express = require('express')
const router = new express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send(
        {
            "Nome": "Kaio valls teste"
        })
})

module.exports = router;