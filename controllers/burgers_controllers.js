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
    burger.update(req.body.sleepy
    }, condition, function (result) {
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});
});

router.delete("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
