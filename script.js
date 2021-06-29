// Функция очистки класса
function cleanSelect (select) {
    // Очищаем от стилей
    return $(select).removeClass('ru').removeClass('uk')
}
// Формируем select и его обработчики
function formSelect() {
    // получаем выпадающий список с уже очищенными классами
    var select = cleanSelect('.select-events');
    // Добавляем класс, который соответствует выбранному элементу
    select.addClass(select.val() == '1' ? 'ru' : 'uk');
    // Добавляем стили, чтобы у списка не было видно полосы прокрутки
    select.css({ height: '50px', overflow: 'hidden', zIndex: '40000' });
    // Определяем обработчик на событие ухода мышки с области элемента
    select.on('mouseleave', function () {
        // Устанавливаем обычный размер
        this.size = 1;
        // Добавляем класс стиля в соответствии с выбранным элементом
        cleanSelect(this).addClass($(this).val() == '1' ? 'ru' : 'uk');
    });
    // Определяем обработчик на событие ухода мышки с области элемента

    select.on('mouseover', function () {

        // Очищаем стиль списка, чтобы он не мешал отображению

        cleanSelect(this);

        // Устанавливаем размер, равный количеству элементов

        this.size = $(this).find('option').length;

    });

}

// После загрузки DOM - получаем список

$(function () {

    formSelect();

});

$(document).ready(function() {
    // $('#test').text("I've changed by JQuerry");

    $('.inp_1').focus(function() {
        if ($(this).val() == "Алексей") {
            $(this).val("").css("opacity","1").css("border","blue");
        }

    });

    $('.inp_1').blur(function() {
        $(this).css("border","1px solid rgba(0,0,0,1)");;
    });

        $('.inp_2').focus(function() {
            if ($(this).val() == "+7(123)456 78-90") {
                $(this).val("").css("opacity","1").css("border","blue");
            }

        });

        $('.inp_2').blur(function() {
            $(this).css("border","1px solid rgba(0,0,0,1)");;
        });


}); // конец ready
