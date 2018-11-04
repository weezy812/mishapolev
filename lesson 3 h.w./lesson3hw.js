
//2.11
/*var name = prompt('What is your name?');
alert(name);*/
//2.12
//1.Da vividetsya

/*var question = prompt('What is the official name of Javascript?');

if(question == 'ECMAScript'){
    alert("That's right!");
}
else{
    alert("You don't know it?ECMAScript!!!");
}
*/
/*
var number = prompt('Enter your number');

if(number >= 1){
    alert(1);
}
else if(number == 0){
    alert(0);
}
else{
    alert(-1);
}
*/


//Проверка логина
/*
var username = prompt('Enter your username');

if(username == 'Админ'){
    var pass = prompt('Enter your password');
    if(pass == 'Черный властелин'){
        alert('Welcome Back!');
    }
    else if(pass == null){
        alert('Entrance canceled');
    }
    else{
        alert('Your password is not correct,try again later');
    }
}
else if(username == null){
    alert('Entrance canceled');
}
else{
    alert('I don\'t know you');
}
*/
/*
var result;
result = (a + b <4) ? 'Мало' : 'Много';
*/

/*
var login = prompt('your username');


var message = (login == 'Vasiliy') ? 'Hello' :
    (login == 'Principal') ? 'Hello,Sir!' :
        (login == '') ? 'no username' :
            'wrong username';
alert(message);
*/

//2
//2
//null
//1
//3
/*
var age = prompt('Enter your age');

if(age >= 14 && <= 90){
    alert...
}
else{
    ...
}
*/
//if(!(age >= 14 && age <= 90)){}
//if (age < 14 || age > 90)
/*
/*                                         // 2.15
var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  i++;
}
var num;



do {
  num = prompt("Number higher then 100?", 0);
} while (num <= 100 && num != null);



number:
  for (var a = 2; a <= 10; a++) {

    for (var b = 2; b < a; b++) {
      if (a % b == 0) continue number;
    }

    alert( a );
  }
                                //2.16
if(browser == 'IE') {
  alert('О, you have IE!');
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert('We support these browsers');
} else {
  alert('We hope that in your browser everything is ok!');
}
var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

*/
/*1. Три числа. Пользователь вводит 3 числа и тип поиска (минимальное или максимальное). Программа выводит результат.

*/

//1
/*
var notNumber = 'text';
var number1 = +prompt('Введите первое число');
var number2 = +prompt('Введите второе число');
var number3 = +prompt('Введите третье число');
var search = prompt('Если вам нужно минимальное число напишите min,если максимальное,напишите max');

if(search == 'max'){
    if(number1 >= number2 && number1 >= number3){
        alert('Maximum value = ' + number1);
    }
    else if(number2 >= number1 && number2 >= number3){
    alert('Maximum value = ' + number2);
    }
    else if(number3 >= number2 && number3 >= number1){
        alert('Maximum value = ' + number3);
    }
    else if(number){
        alert('You should write number!!!');
    }
}
else if(search == 'min'){
    if(number1 <= number2 && number1 <= number3){
        alert('Minimal value = ' + number1)
    }
    else if(number2 <= number1 && number2 <= number3){
        alert('Minimal value = ' + number2);
    }
    else if(number3 <= number2 && number3 <= number1){
        alert('Minimal value = ' + number3);
    }
    else if(notNumber){
        alert('You should write number!!!');
    }
    }
}
else{
    alert('You should write min or max!!!');
}
*/

//2. Сумма диапазона. Пользователь задает диапазон чисел. Если данные некорректны - программа повторно запрашивает ввод. Вычислить сумму чисел в заданном диапазоне.

var a1 = +prompt('Введите первое число диапазона');
var a2 = +prompt('Введите последнее число диапазона');
var sum = ((a1 + a2)/2)*a2;
if(a1 == Number(a1) && a2 == Number(a2)){
    alert(sum);
}

while(a1 != Number(a1) && a2 != Number(a2)){
    alert('Повторите ввод');
    var a1 = +prompt('Введите первое число диапазона');
    var a2 = +prompt('Введите последнее число диапазона');
    var sum = ((a1 + a2)/2)*a2;
    alert(sum);
}

