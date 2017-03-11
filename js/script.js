"use strict";

//создаем массив объектов с набором вопросов

var obj = {

    header: "Тест по программированию",

    questions:[
        {title:"Какой метод для работы с JSON неверный",
            chekboxName:["one","two","three"],
            id:["id-1","id-2","id-3"],
            answers:["JSON.parse","JSON.stringify","JSON.print"],
            correct:'id-3'
        },
        {title:"Какой язык используется во FrontEnd разработке?",
            chekboxName:["one","two","three"],
            id:["id-4","id-5","id-6"],
            answers:["Javascript","Java","PHP"],
            correct:'id-4'
        },
        {title:"Что такое Grunt?",
            chekboxName:["one","two","three"],
            id:["id-7","id-8","id-9"],
            answers:["Сборщик веб-приложений","Сборщик серверов","Сборщик данных"],
            correct:'id-7'
        }]
};

//записываем массив объектов в localStorage
try {
    var sObj = JSON.stringify(obj);  // преобразование массива в строку
    localStorage.setItem("object", sObj);  // записываем в localStorage
}
catch (e) {
    alert (e)
}
try {
    var retObj = JSON.parse(localStorage.getItem("object"));  // получаем с localStorage по ключу object  преобразуем обратно
}
catch (e) {
    alert (e)
}

//формируем тест с помощью шаблонизатора
var html = $('#test').html();  //возвращаем html, находящийся внутри элемента с id = test.
var content = tmpl(html,retObj);  //

$("body").append(content);


//выводим модальное окно
function showModal(e){
    e.preventDefault();  // предотвращаем действие события по умолчанию
    var modal = $("<div class='modal'></div>");  //возвращаем div class='modal'
    var result = 0;
    var answer = $('input:checked');
    var correct = [];
    for (var i=0; i<retObj.questions.length;i++){
        correct[i] = retObj.questions[i].correct;
        if($(answer[i]).attr('id')==correct[i]){   // если значение id совпадет со значением correct тогда
            modal.append('<p class="correct">Вы прошли тест успешно!</p>');
        } else {
            modal.append('<p class="incorrect">Тест не пройден. Пропробовать еще раз?</p>');
        }
    }
    modal.append('<button>Попробовать снова</button>');  //добавляем в модальку кнопку
    $('body').append(modal);

    $('button').one('click',function(e){
        e.preventDefault();
        modal.detach();              // удаляет модальеу при клике
        // $('input').attr('checked', false);           // очищает чекбоксы
    })
}
$('.success').on('click',showModal);
