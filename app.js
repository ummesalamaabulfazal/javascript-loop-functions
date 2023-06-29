1
function calculatesum(a, b) {
    var sum = a + b;
    console.log("the sum of", a, "and ", b, " is", sum);
    return sum;
}
calculatesum(4, 6);

2
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
3
function factorial(n) {
    if (n == 0 || n == 1) {
        console.log(" factorial of", n, "is 1");
        return 1;
    }
    else {
        var result = 1
        for (var i = 2; i <= n; i++) {
            result *= i;
            console.log("factorial of", i, "is ", result);
        }
        console.log(" factorial of", n, "is ", result);
        return result;
    }
}
factorial(5);
4
var num = 1
while (num <= 20) {
    console.log(num);
    num++;
}
5
function calculatesum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
var numbers = [4, 6, 8, 10];
var result = calculatesum(numbers);
console.log("the sum of numbers is: ", result);
6
function printfibonacci(n) {
    var fibsequence = [];
    for (var i = 0; i <= n; i++) {
        if (i < 2) {
            fibsequence.push(i);
        }
        else {
            fibsequence.push(fibsequence.push[i - 1] + fibsequence.push[i - 2]);
        }
    }
    console.log("fibonacci sequence up to", n, " ;", fibsequence.join(", "));
}
var num = 10;
printfibonacci(num);
7
function primenumber(number) {
    if (number <= 1) {
        console.log(number + " is not a prime number");
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(number + " is not a prime number");
            return;
        }

    }

    console.log(number + " is  a prime number");
}
primenumber(2);
primenumber(12);
8
function reverseofstring(inputstring) {
    const reversedstring = inputstring.split('').reverse().join('');
    return reversedstring;
}

console.log(reverseofstring("you okay?"));
9.
function largest(array) {
    let largest = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

var numbers = [4, 8, 9, 7]
console.log("largest element in the array is", largest(numbers));
10.

function area(length, width) {
    return length * width;
}
var length = 9;
var width = 10;
console.log("The area of your rectangle is " + area(length, width));
11.
function multiplicationtable(number) {
    let i = 1;
    while (i <= 10) {
        var result = number * i;
        console.log(number + " * " + i + " = " + result);
        i++;
    }
}
multiplicationtable(6);
14.
function detectleapyear(year) {
    let leap = false;
    switch (true) {
        case (year % 400 === 0):
            leap = true;
            break;
        case (year % 100 === 0):
            leap = false;
            break;
        case (year % 4 === 0):
            leap = true;
            break;
        default:
            leap = false;
    }
    return leap;
}
console.log(detectleapyear(2021));
16.
// function descenedingorder(number)

// let i = 10
for (i = 10; i >= 1; i--) {
    console.log(i);
}
17.
function reversearray(array) {
    let left = 0
    let right = array.length - 1;
    while (left < right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
}
const array = [1, 3, 5, 7, 8];
console.log("original array is:" + array);
reversearray(array);
console.log("the reverse array of which will be " + array);
27
function evenodd(number) {
    if (number % 2 === 0) {
        return number + " is even ";
    }
    else {
        return number + " is odd ";
        
    }
}
console.log(evenodd(6));
console.log(evenodd(7));
console.log(evenodd(97));
29.
function smallest(array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

var numbers = [4, 8, 9, 7]
console.log("smallest element in the array is", smallest(numbers));






