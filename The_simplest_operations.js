// DECRIOTION:
// В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b".

// Указанные ниже Sample Input (образец входных данных) и Sample Output (образец выходных данных) - это пример. Они показывают, что при значениях переменных "a" и "b" как в Sample Input, например 2 и 8, ваш результат должен быть такой, как указано в Sample Output. Например, если Sample Input равен 2 и 8, то Sample Output должен быть 10, т.е. сумма первой и второй переменных.

// Обратите внимание: вам нигде в этом курсе не нужно использовать console.log или document.write, всегда нужно только вернуть из функции результат с помощью return.

// Sample Input:

// 2 8
// Sample Output:

// 10

// SOLUTION:
function testSum(a, b) {
    var x;
    x = a + b;
    return x;
}
console.log(testSum(2, 8));