document.addEventListener('DOMContentLoaded', function() {
    // добавление слайд эффектов для элемента с id=sldir-images 
    slidr.create('slidr-images', {
        // стиль перехода (cube, linear, fade, none)
        transition: 'cube',
        // включить навигацию по клавиатуре при наведении мыши
        keyboard: true,
        // добавление навигации по всем элементам
        breadcrumbs: true,
        // время перехода от элемента к элементу
        timing: { 'cube': '0.4s ease-in' },
        // добавление паузы при автоматическом режиме
        pause: true,
    })
    // добавление цикличности по горизонтали
    .add('h', ['one', 'two', 'three', 'four', 'five', 'one'])
    // запуск в автоматическом режиме
    .auto();
});