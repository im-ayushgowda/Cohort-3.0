# JavaScript Practice Questions & Answers

## Console & Basics

### 1. Print "Hello JavaScript" in the console.

```javascript
console.log("Hello JavaScript");
```

### 2. Print your name, age, and city using one console.log().

```javascript
console.log("Ayush", 20, "Bangalore");
```

### 3. Print a warning message using console.warn().

```javascript
console.warn("This is a warning message");
```

### 4. Print an error message using console.error().

```javascript
console.error("This is an error message");
```

### 5. Use console.table() to display an array of 5 numbers.

```javascript
console.table([10, 20, 30, 40, 50]);
```

---

# Variables

### 1. Create a variable called studentName and store your name in it.

```javascript
let studentName = "Ayush";
```

### 2. Create a variable age and print it.

```javascript
let age = 20;
console.log(age);
```

### 3. Create two variables and swap their values.

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a, b);
```

### 4. Create a constant variable for PI and print it.

```javascript
const PI = 3.14159;
console.log(PI);
```

### 5. Declare a variable without assigning a value and print it.

```javascript
let value;
console.log(value);
```

### 6. Create a variable score and increase it by 10.

```javascript
let score = 50;
score += 10;
console.log(score);
```

### 7. Create three variables for first name, last name, and full name.

```javascript
let firstName = "Ayush";
let lastName = "Gowda";
let fullName = firstName + " " + lastName;

console.log(fullName);
```

---

# Data Types

### 1. Create variables of type string, number, boolean, null, and undefined.

```javascript
let str = "JavaScript";
let num = 100;
let isStudent = true;
let empty = null;
let data;

console.log(str, num, isStudent, empty, data);
```

### 2. Check the type of different variables using typeof.

```javascript
console.log(typeof str);
console.log(typeof num);
console.log(typeof isStudent);
```

### 3. Store your mobile number in a variable and check its type.

```javascript
let mobile = 9876543210;
console.log(typeof mobile);
```

### 4. Create a variable with value null and check its type.

```javascript
let x = null;
console.log(typeof x);
```

### 5. Create a bigint number and print it.

```javascript
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
```

---

# Type Conversion & Coercion

### 1. Convert the string "50" into a number.

```javascript
let number = Number("50");
console.log(number);
```

### 2. Convert the number 100 into a string.

```javascript
let text = String(100);
console.log(text);
```

### 3. Convert "true" into a boolean.

```javascript
let boolValue = Boolean("true");
console.log(boolValue);
```

### 4. Check the output.

```javascript
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
```

### 5. Convert "123abc" into a number.

```javascript
let value1 = "123abc";
console.log(Number(value1));
```

### 6. Use parseInt() on "500px".

```javascript
console.log(parseInt("500px"));
```

---

# Operators

### 1. Add two numbers and print the result.

```javascript
console.log(10 + 20);
```

### 2. Find the remainder when 25 is divided by 4.

```javascript
console.log(25 % 4);
```

### 3. Find the square of a number using exponent operator.

```javascript
console.log(5 ** 2);
```

### 4. Increment a variable using ++.

```javascript
let count = 1;
count++;
console.log(count);
```

### 5. Decrement a variable using --.

```javascript
let num1 = 5;
num1--;
console.log(num1);
```

### 6. Use += operator to increase a variable by 20.

```javascript
let marks = 50;
marks += 20;
console.log(marks);
```

### 7. Compare two numbers.

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);
```

### 8. Check if two values are strictly equal using ===.

```javascript
console.log(10 === 10);
```

### 9. Compare "10" and 10 using both == and ===.

```javascript
console.log("10" == 10);
console.log("10" === 10);
```

### 10. Create two boolean variables and test &&, ||, and !.

```javascript
let p = true;
let q = false;

console.log(p && q);
console.log(p || q);
console.log(!p);
```

---

# Strings

### 1. Create a string and print its length.

```javascript
let language = "JavaScript";
console.log(language.length);
```

### 2. Convert a string into uppercase.

```javascript
console.log(language.toUpperCase());
```

### 3. Convert a string into lowercase.

```javascript
console.log(language.toLowerCase());
```

### 4. Check if a string includes the word "JavaScript".

```javascript
console.log(language.includes("JavaScript"));
```

### 5. Extract the word "World" from "Hello World".

```javascript
let greeting = "Hello World";
console.log(greeting.slice(6));
```

### 6. Replace "apple" with "mango" in a sentence.

```javascript
let fruit = "I like apple";
console.log(fruit.replace("apple", "mango"));
```

### 7. Split "HTML,CSS,JS" into an array.

```javascript
console.log("HTML,CSS,JS".split(","));
```

### 8. Remove extra spaces from a string.

```javascript
let text1 = "   Hello World   ";
console.log(text1.trim());
```

### 9. Repeat the word "Hi" 5 times.

```javascript
console.log("Hi ".repeat(5));
```

### 10. Print the first character of a string.

```javascript
console.log(language[0]);
```

### 11. Use template literals.

```javascript
let name = "Aman";
let age1 = 20;

console.log(`My name is ${name} and I am ${age1} years old`);
```

---

# Numbers & Math

### 1. Round 4.7 using Math.round().

```javascript
console.log(Math.round(4.7));
```

### 2. Find the square root of 81.

```javascript
console.log(Math.sqrt(81));
```

### 3. Find the maximum number.

```javascript
console.log(Math.max(10, 20, 5, 99));
```

### 4. Generate a random number between 1 and 10.

```javascript
console.log(Math.floor(Math.random() * 10) + 1);
```

### 5. Convert "99.99" into an integer.

```javascript
console.log(parseInt("99.99"));
```

### 6. Check whether 25 is an integer or not.

```javascript
console.log(Number.isInteger(25));
```

### 7. Use toFixed(2).

```javascript
let pi = 3.141592;
console.log(pi.toFixed(2));
```

---

# Conditionals

### 1. Positive or Negative

```javascript
let num2 = -5;

if (num2 >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
```

### 2. Even or Odd

```javascript
let num3 = 4;

if (num3 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### 3. Eligible to Vote

```javascript
let age2 = 20;

if (age2 >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}
```

### 4. Largest Among Two Numbers

```javascript
let x1 = 10;
let y1 = 20;

if (x1 > y1) {
  console.log(x1);
} else {
  console.log(y1);
}
```

### 5. Largest Among Three Numbers

```javascript
let a1 = 10;
let b1 = 25;
let c1 = 15;

if (a1 > b1 && a1 > c1) {
  console.log(a1);
} else if (b1 > c1) {
  console.log(b1);
} else {
  console.log(c1);
}
```

### 6. Leap Year

```javascript
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
```

### 7. Divisible by both 3 and 5

```javascript
let number1 = 15;

if (number1 % 3 === 0 && number1 % 5 === 0) {
  console.log("Divisible by both 3 and 5");
}
```

### 8. Grading System

```javascript
let marks1 = 80;

if (marks1 >= 90) {
  console.log("A");
} else if (marks1 >= 75) {
  console.log("B");
} else if (marks1 >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}
```

### 9. Vowel or Consonant

```javascript
let ch = "a";

if ("aeiou".includes(ch)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
```

### 10. Calculator using switch

```javascript
let numA = 10;
let numB = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(numA + numB);
    break;

  case "-":
    console.log(numA - numB);
    break;

  case "*":
    console.log(numA * numB);
    break;

  case "/":
    console.log(numA / numB);
    break;

  default:
    console.log("Invalid operator");
}
```

### 11. Day Name

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

### 12. Username and Password Validation

```javascript
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
```

---

# Truthy & Falsy

### 1. Empty String

```javascript
if ("") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

### 2. Zero

```javascript
if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

### 3. Empty Array

```javascript
if ([]) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

### 4. Valid or Invalid

```javascript
let input = "Hello";

if (input) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
```

---

# Ternary Operator

### 1. Even or Odd

```javascript
let num = 7;

let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);
```

### 2. Age Check

```javascript
let age = 20;

let message = age >= 18 ? "Above 18" : "Below 18";
console.log(message);
```

### 3. Greater Number

```javascript
let a = 15;
let b = 30;

let greater = a > b ? a : b;
console.log(greater);
```

---

# Mixed Practice Questions

### 1. Mini Biodata Program

```javascript
let name = "Ayush";
let age1 = 20;
let city = "Bangalore";

console.log(`My name is ${name}, I am ${age1} years old and I live in ${city}`);
```

### 2. Area of Rectangle

```javascript
let length = 10;
let width = 5;

let area = length * width;
console.log("Area =", area);
```

### 3. Simple Interest

```javascript
let p = 10000;
let r = 5;
let t = 2;

let si = (p * r * t) / 100;
console.log("Simple Interest =", si);
```

### 4. Celsius to Fahrenheit

```javascript
let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);
```

### 5. Kilometer to Meter

```javascript
let km = 5;

let meters = km * 1000;
console.log(meters);
```

### 6. Total Marks and Percentage

```javascript
let sub1 = 80;
let sub2 = 75;
let sub3 = 90;
let sub4 = 60;
let sub5 = 85;

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;

console.log("Total =", total);
console.log("Percentage =", percentage);
```

### 7. Electricity Bill

```javascript
let units = 120;
let rate = 5;

let bill = units * rate;
console.log("Electricity Bill =", bill);
```

### 8. Username Generator

```javascript
let firstName2 = "Ayush";
let birthYear = 2005;

let username2 = firstName2 + birthYear;
console.log(username2);
```

### 9. Starts With Letter

```javascript
let word = "JavaScript";

console.log(word.startsWith("J"));
```

### 10. Count Characters Excluding Spaces

```javascript
let sentence = "I love JavaScript";

let count = sentence.replaceAll(" ", "").length;

console.log(count);
```

---

# Logical Thinking Questions

### 1. Greater Number

```javascript
let x = 10;
let y = 25;

if (x > y) {
  console.log(x, "is greater");
} else {
  console.log(y, "is greater");
}
```

### 2. Between 10 and 50

```javascript
let number2 = 30;

if (number2 >= 10 && number2 <= 50) {
  console.log("Between 10 and 50");
} else {
  console.log("Not in range");
}
```

### 3. Password Length

```javascript
let password2 = "mypassword123";

if (password2.length > 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}
```

### 4. Can Drive

```javascript
let age3 = 20;
let hasLicense = true;

if (age3 > 18 && hasLicense) {
  console.log("Can Drive");
} else {
  console.log("Cannot Drive");
}
```

### 5. Divisible by 2, 3, or Both

```javascript
let num4 = 12;

if (num4 % 2 === 0 && num4 % 3 === 0) {
  console.log("Divisible by both");
} else if (num4 % 2 === 0) {
  console.log("Divisible by 2");
} else if (num4 % 3 === 0) {
  console.log("Divisible by 3");
}
```

### 6. Greeting Based on Time

```javascript
let time = 15;

if (time < 12) {
  console.log("Good Morning");
} else if (time < 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

### 7. Multiple of 10

```javascript
let num5 = 50;

if (num5 % 10 === 0) {
  console.log("Multiple of 10");
}
```

### 8. Discount Calculator

```javascript
let amount = 2000;

let finalAmount = amount > 1000 ? amount - 200 : amount;

console.log(finalAmount);
```

### 9. Product Stock Check

```javascript
let inStock = true;

if (inStock) {
  console.log("Product Available");
} else {
  console.log("Out of Stock");
}
```

### 10. Final Bill with GST

```javascript
let price = 1000;
let gst = 18;

let finalBill = price + (price * gst / 100);

console.log(finalBill);
```

---

# Challenge Questions for Beginners

### 1. Random OTP

```javascript
let otp = Math.floor(1000 + Math.random() * 9000);

console.log("OTP =", otp);
```

### 2. Reverse a 3-letter String

```javascript
let str2 = "cat";

let reversed = str2[2] + str2[1] + str2[0];

console.log(reversed);
```

### 3. Last Character of a String

```javascript
let text2 = "JavaScript";

console.log(text2[text2.length - 1]);
```

### 4. Uppercase Initials

```javascript
let fullName2 = "Ayush Gowda";

let parts = fullName2.split(" ");

let initials = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();

console.log(initials);
```

### 5. Compare Strings Ignoring Case

```javascript
let s1 = "Hello";
let s2 = "hello";

console.log(s1.toLowerCase() === s2.toLowerCase());
```

### 6. Login Validation

```javascript
let username3 = "admin";
let password3 = "1234";

if (username3 === "admin" && password3 === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid Login");
}
```

### 7. 2-digit or 3-digit Number

```javascript
let num6 = 250;

if (num6 >= 10 && num6 <= 99) {
  console.log("2-digit number");
} else if (num6 >= 100 && num6 <= 999) {
  console.log("3-digit number");
}
```

### 8. ATM Balance Checker

```javascript
let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance) {
  balance -= withdraw;
  console.log("Remaining Balance =", balance);
} else {
  console.log("Insufficient Balance");
}
```

### 9. Traffic Light System

```javascript
let signal = "red";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}
```

### 10. Marksheet Generator

```javascript
let math = 80;
let science = 70;
let english = 90;

let totalMarks = math + science + english;
let percent = totalMarks / 3;

console.log("Total =", totalMarks);
console.log("Percentage =", percent);

if (percent >= 90) {
  console.log("Grade A");
} else if (percent >= 75) {
  console.log("Grade B");
} else if (percent >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

---

# Expected Outputs (Sample)

## Console & Basics Outputs

```text
Hello JavaScript
Ayush 20 Bangalore
This is a warning message
This is an error message
┌─────────┬────┐
│ (index) │ Values │
├─────────┼────┤
│ 0       │ 10 │
│ 1       │ 20 │
│ 2       │ 30 │
│ 3       │ 40 │
│ 4       │ 50 │
└─────────┴────┘
```

## Variables Outputs

```text
20
20 10
3.14159
undefined
60
Ayush Gowda
```

## Data Types Outputs

```text
string
number
boolean
number
object
12345678901234567890n
```

## Type Conversion Outputs

```text
50
100
true
52
3
2
NaN
500
```

## Operators Outputs

```text
30
1
25
2
4
70
true
false
true
false
true
true
false
false
true
false
```

## Strings Outputs

```text
10
JAVASCRIPT
javascript
true
World
I like mango
[ 'HTML', 'CSS', 'JS' ]
Hello World
Hi Hi Hi Hi Hi
J
My name is Aman and I am 20 years old
```

## Numbers & Math Outputs

```text
5
9
99
Random number between 1 and 10
99
true
3.14
```

## Conditionals Outputs

```text
Negative
Even
Eligible to vote
20
25
Leap Year
Divisible by both 3 and 5
B
Vowel
15
Wednesday
Login successful
```

## Truthy & Falsy Outputs

```text
Falsy
Falsy
Truthy
Valid
```

## Ternary Outputs

```text
Odd
Above 18
30
```

## Mixed Practice Outputs

```text
My name is Ayush, I am 20 years old and I live in Bangalore
Area = 50
Simple Interest = 1000
86
5000
Total = 390
Percentage = 78
Electricity Bill = 600
Ayush2005
true
19
```

## Logical Thinking Outputs

```text
25 is greater
Between 10 and 50
Strong Password
Can Drive
Divisible by both
Good Afternoon
Multiple of 10
1800
Product Available
1180
```

## Challenge Outputs

```text
OTP = Random 4-digit number
cat -> tac
t
AG
true
Login Success
3-digit number
Remaining Balance = 3000
Stop
Total = 240
Percentage = 80
Grade B
```
