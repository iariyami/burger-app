// Required Modules
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var data = {
            burgers: data
        };
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/burger", function (req, res) {
    console.log(req.body)
    burger.create(req.body.name, function (data) {
        res.json(data);
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.update(req.body.id, function (data) {
        res.json(data);
    });
});

// Export routes for server.js to use.
module.exports = router;