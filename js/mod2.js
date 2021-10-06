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
