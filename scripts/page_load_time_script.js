(function () {
    window.addEventListener('load', function () {
        let time = window.performance.timing;
        let pageLoadTime = time.loadEventStart - time.navigationStart;
        let footer = document.querySelector('footer');
        let line = document.createElement('p');
        line.innerText = 'Страница загружена за ' + pageLoadTime + ' мс';
        line.classList.add('homepage__load__info');
        footer.appendChild(line);
    });
}());