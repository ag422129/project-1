window.onload = function () {
    var btn = document.querySelector('.more');
    var moreinfo = document.querySelector('.moreinfo');
    var close = document.querySelector('.close');
    btn.addEventListener('click', function () {
        moreinfo.classList.add('show');
    });
    close.addEventListener('click', function () {
        moreinfo.classList.remove('show');
    })
}