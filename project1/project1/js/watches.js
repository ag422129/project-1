
var images = document.querySelectorAll('.lazyload');
window.onload = function () {
    window.addEventListener('scroll', function () {
        var images = document.querySelectorAll('.lazyload');
        for (var i = 0; i < images.length; i++) {
            if (isInViewport(images[i])) {
                images[i].src = images[i].getAttribute('data-src');
                images[i].classList.remove('lazyload');
                images[i].style.visibility = 'visible';
                images[i].style.opacity = 1;
            }
        }
    });
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}