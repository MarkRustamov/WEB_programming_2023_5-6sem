document.addEventListener('DOMContentLoaded', function () {
    let navigationListLinks = document.querySelectorAll('.homepage__main__navigation__list__item__element');
    navigationListLinks.forEach(function (link) {
        if (link.href === document.location.href) {
            link.classList.add('homepage__main__navigation__list__item_active');
        }
    })
});