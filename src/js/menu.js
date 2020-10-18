// Menu responsive
// By NguyenLong
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Header
document.addEventListener(
    'scroll',
    (event) => {
        // handle scroll event
        //console.log('scroll');
        var header = document.querySelector("nav");
        header.classList.toggle("bgc-navbar", window.scrollY > 0);
    }, {
        passive: true
    }
);