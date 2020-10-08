// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat-burger").on("click", function (event) {

        var id = $(this).data("id");
        var devoured = { id: id };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("Devoured");
                // Reloads the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit_btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        if ($("#burgerName").val().trim().length < 1) {
            alert("Your burger needs a name");
        }
        else {

            var newBurger = {
                name: $("#burgerName").val().trim()
            };

            // Send the POST request.
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });
});