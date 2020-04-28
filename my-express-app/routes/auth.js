const router = require("express").Router();


router.get("/", (req, res) => {

    res.send("This is the express app. You have now entered express");
    
});

module.exports  = router;