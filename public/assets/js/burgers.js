$(function(){
    $(".haventSeenYet").on("click", function(event) {
        events.preventDefault();


        if (unseen == true) {
            unseen == false;
        } else {
            unseen == true;
        }
    });
});