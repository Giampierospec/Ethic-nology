//Function to scroll smoothly
$(document).on('click', '#navDemo a, .w3-top a, footer a[href="#Main"]', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, function() {
        window.location.hash = "#";
    });
});
