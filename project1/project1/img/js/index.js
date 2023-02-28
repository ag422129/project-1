window.onload = function () {
    var pic = document.querySelector('.pic');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var slider_img = document.querySelector('.slider-img')
    var index = 0;
    var first = slider_img.children[0].cloneNode(true);
    slider_img.appendChild(first);
    prev.addEventListener('click', function () {
        if (index == 0) {
            index = slider_img.children.length - 1;
            slider_img.style.left = -index * pic.offsetWidth + 'px';
        }
        index--;
        timer = setInterval(function () {
            var step = (-index * pic.offsetWidth - slider_img.offsetLeft) / 10;
            if (slider_img.offsetLeft == (-index * pic.offsetWidth)) {
                clearInterval(timer);
            }
            slider_img.style.left = slider_img.offsetLeft + Math.floor(step) + 'px';
        }, 15);
    })
    next.addEventListener('click', function () {
        if (index == slider_img.children.length - 1) {
            index = 0;
            slider_img.style.left = -index * pic.offsetWidth + 'px';
        }
        index++;
        timer = setInterval(function () {
            var step = (-index * pic.offsetWidth - slider_img.offsetLeft) / 10;
            if (slider_img.offsetLeft == (-index * pic.offsetWidth)) {
                clearInterval(timer);
            }
            slider_img.style.left = slider_img.offsetLeft + Math.floor(step) + 'px';
        }, 15);
    })
    timer = setInterval(function () {
        next.click();
    }, 2500);


}

