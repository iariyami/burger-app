// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    create: function (burgerId, cb) {
        orm.insertB(burgerId, function (res) {
            cb(res);
        });
    },

    update: function (devouredId, cb) {
        orm.updateB(devouredId, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;