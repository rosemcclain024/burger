$(function(){
    $(".haventSeenYet").on("click", function(event) {
        events.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("haventSeenYet");
            
        var newDevouredState = {
            devoured: newDevour
        };
            
        if (newDevour == true) {
            newDevour == false;
        } else {
            newDevour == true;
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed stuff and it worked");
            location.reload();
        });
    });


    $(".create-form").on("submit", function(event) {
    
        event.preventDefault();

        var newBurger = {
        name: $("#ca").val().trim(),
        newDevour: $("[name=newDevour]:").val().trim()
        };

    
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new band");
            location.reload();
        });
    });
});
