window.onload = function () {
    function myTime() {
        const time = new Date();
        const hh = time.getHours();
        const mm = time.getMinutes();
        const ss = time.getSeconds();
        var clock = document.querySelector('#clock');
        const formattedhh = hh < 10 ? '0' + hh : hh;
        const formattedmm = mm < 10 ? '0' + mm : mm;
        const formattedss = ss < 10 ? '0' + ss : ss;
        clock.innerHTML = formattedhh + ':' + formattedmm + ':' + formattedss;
    }
    myTime();
    setInterval(myTime, 1000);

}