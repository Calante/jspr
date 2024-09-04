'use strict';

let ram = prompt('Введите фамилию', 'Неизвестная фамилия');
let breed = prompt('Введите имя', 'Неизвестное имя');
let number = prompt('Введите отчество', 'Неизвестное отчество');
let isTrue = confirm(`Вас зовут ${ram} ${breed} ${number}`);
alert(isTrue)

