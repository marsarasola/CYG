
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('navbar');
    var scrollPrev = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > scrollPrev) {
            navbar.classList.add('fixed-top');
        } else {
            navbar.classList.remove('fixed-top');
        }
        scrollPrev = scrolled;
    });
});

