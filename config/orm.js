const connection = require("../config/connection.js");

const orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertB: function (burgerId, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerId], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateB: function (devouredId, cb) {
        var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
        connection.query(queryString, [devouredId], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;