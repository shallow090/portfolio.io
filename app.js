$(document).ready(function () {
    // Smooth scroll to the next section when clicking the down arrow
    $('.down-arrow-1, .down-arrow-2, .down-arrow-3').click(function () {
        // Assuming the next section has an id of 'main1'
        var nextSection = $('#main1');
        
        // Check if the element exists
        if (nextSection.length) {
            // Perform smooth scroll
            $('html, body').animate({
                scrollTop: nextSection.offset().top
            }, 1000);
        }
    });

    // Show/hide the down arrow based on the scroll position
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            // Hide the down arrow when at the bottom
            $('.down-arrow-1, .down-arrow-2, .down-arrow-3').fadeOut();
        } else {
            // Show the down arrow
            $('.down-arrow-1, .down-arrow-2, .down-arrow-3').fadeIn();
        }
    });
});





