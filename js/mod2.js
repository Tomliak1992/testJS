// 1/32
function checkAge(age) {
  if (age >=18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// 2/32

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  } 
  return "Access denied, wrong password!";

}

// 3/32

function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }   
    return "The order is accepted, our manager will contact you";
  
}

// 4/32

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0]// Change code below this line
const secondElement = fruits[1]
const lastElement = fruits[3]

// 5/32

const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = 'peach';
fruits[3] = 'banana';

// 6/32

const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;

// 8/32

const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 9/32

function getExtremeElements(array) {
  // Change code below this line
return [array[0], array[array.length - 1]]

}

// 10/32

function splitMessage(message, delimeter) {
  let words;
	words = message.split(delimeter)
  return words;
}

// 11/32

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
return message.split(" ").length * pricePerWord

}

// 12/32

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
string = array.join(delimeter)
  // Change code above this line
  return string;
}

// 13/32

function slugify(title) {
  // Change code below this line
let string;
  string = title.split(" ").join("-").toLowerCase()

return string

}

// 14/32

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, - 1);
const lastThreeEls = fruits.slice(2);

// 15/32

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

// 16/32

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const a = firstArray.concat(secondArray);
  if(a.length > maxLength) {
  return a.slice(0, maxLength)
  }

return a
    
  }

// 17/32

const start = 3;
const end = 7;

for (let i = start; i <=end ; i +=1) { 
  console.log(i);
}

//  18/32

function calculateTotal(number) {

  let sum = 0;
for (let i = 0; i <= number; i += 1) { 
  sum += i;
}
return sum;
}

// 19/32

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// 20/32

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i <= order.length - 1; i += 1) {
  total += order[i]
}
  return total;
}

// 21/32

function findLongestWord(string) {
  // Change code below this line
let words = string.split(' ');
let wordLength;
let longestWord;
 
  for (let i = 0; i < words.length; i += 1) {
   wordLength = words[1].length;
  	if (words[i].length > wordLength) {
      longestWord = words[i];
      return longestWord
    }   
  }
    
 return words

}

// 22/32

function createArrayOfNumbers(min, max) {
  const numbers = [];

for (let i = min; i <= max; i += 1) {
numbers.push(i)
}
  return numbers;
}

// 23/32

function filterArray(numbers, value) {
  // Change code below this line
const filteredNumbers = [];
 
for (let i = 0; i < numbers.length; i += 1) {
const number = numbers[i];
 if (numbers[i] > value) {
 filteredNumbers.push(number)
 }
}
 return filteredNumbers;
}

// 24/32

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

// 25/32

function getCommonElements(array1, array2) {
  // Change code below this line
const newElement = [];
  
  for(let element of array1) {
  if(array2.includes(element)){
  newElement.push(element);
  
  
  
  }
  }
return newElement

 // Change code above this line
}

// 26/32

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let item of order) {
    total += item;
  }

  // Change code above this line
  return total;
}

// 27/32

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (const number of numbers) {
     numbers += number;
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}

// 28/32

// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// 29/32

function getEvenNumbers(start, end) {
  // Change code below this line
 let evenNumbers = [];
 for (let i = start; i <= end; i += 1) {
   if (i % 2 === 0) {
     evenNumbers.push(i);
   }
 }
return evenNumbers;
   // Change code above this line
 }


//  30/32

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}

// 31/32

function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i
    }
  }

}

// 32/32

function includes(array, value) {
  // Change code below this line
for(let number of array){
  
  if(number === value){
  return true;
  }
 }
  return false;// Change code above this line
}

