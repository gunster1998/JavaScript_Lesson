function calculater (num1,num2,increase) {
    if (increase==="+") {
        return console.log(num1+num2);
    }
    else if (increase==="-") {
        return console.log(num1-num2)
    }
    else {
        return console.log(num1+num2);
    }
}

calculater(2,3,"+")
calculater(2,3,"-")
calculater(2,3)

// Создайте простой калькулятор, который принимает два числа и одно строковое значение, называющее операцию. Если операция — сложение, то следует
// сложить два числа. Если вычитание — вычесть одно число из другого. Если
// конкретного указания нет, базовое значение должно быть равным add.
// Выведите результат работы функции. Протестируйте ее, вызвав с помощью
// разных операторов и без оператора.
// 1.	 Определите две переменные, содержащие численные значения.
// 2.	 Задайте переменную для хранения оператора: + или -.
// 3.	 Создайте функцию, которая в своих параметрах извлекает два значения
// и строковый оператор. Используйте эти значения с условием, чтобы проверить, каким будет оператор: + или -. Далее в зависимости от выбора сложите или вычтите значения (помните, что, если указан недопустимый оператор, функция по умолчанию должна выполнить операцию сложения).
// 4.	 Вызовите функцию, используя ваши переменные, и выведите ответ на
// экран с помощью console.log().
// 5.	 Измените значение оператора на дру