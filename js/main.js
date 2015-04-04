$(document).ready(
    function () {

        $(window).on('scroll', function (index) {
            var bottomScrollPosition, windowHeight, windowScrollPosition;
            windowHeight = $(window).height();
            windowScrollPosition = $(window).scrollTop();
            bottomScrollPosition = windowHeight + windowScrollPosition;
            return $('.not-visible').each(function(i, element) {
                if ($(element).offset().top < bottomScrollPosition) {
                    return $(element).removeClass('not-visible').addClass('set-visible');
                }
            });
        });

    }
);