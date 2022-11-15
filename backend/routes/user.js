const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => { 

    return res.json("REEEEGET")
});

router.post("/", async (req, res) => { 

    return res.json("REEEEPOST");
});


module.exports = router;
