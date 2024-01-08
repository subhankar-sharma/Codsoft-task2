$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });


    $(window).scroll(function () {
        $('.fade-in').each(function () {
            const elementbottom = $(this).offset().top + $(this).outerHeight();
            const windowbottom = $(window).scrollTop() + $(window).height();

            if (windowbottom > elementbottom) {
                $(this).addClass('fade-in-element');
            }
        });
    });
});