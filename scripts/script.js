// Task 1: Print the first 10 square numbers
console.log("Task 1");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

// Task 2: Count down from 5 to 1 then say "Blastoff!"
console.log("Task 2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

// Task 3: Print the even numbers from 1 to 50 (including 50)
console.log("Task 3");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Task 4: Print the sum of 1 through 100
console.log("Task 4");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Task 5: Print the first 10 factorials
console.log("Task 5");
for (let i = 1; i <= 10; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    console.log(i + "! =", factorial);

    // Task 6
console.log("Task 6");
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 7
console.log("Task 7");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr.at(i));
}

// Task 8
console.log("Task 8");
let cubeNumbers = [];
for (let i = 1; i <= 10; i++) {
    cubeNumbers.push(Math.pow(i, 3));
}
console.log(cubeNumbers);

// Task 9
console.log("Task 9");
let fibonacciNumbers = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
}
console.log(fibonacciNumbers);

// Task 10
console.log("Task 10");
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log(reversedArr);

}
