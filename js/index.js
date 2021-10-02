'use strict' 
// автопроверки
// 2/36

let productName = "Droid";
productName = "Repair droid"
let pricePerItem = 2000;
pricePerItem = 3500

// 3/36

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

//  4/36
const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = (pricePerItem * orderedQuantity);

// 5/36
const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// 6/36
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.` 

// 7/36
function sayHi() {
    console.log("Hello, this is my first function!")
    }
    sayHi();

    // 8\36

    
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);

//   9/36

function add(a, b, c) {
    return a + b + c;
    }
    add(2, 5, 8); // 15
    
    console.log(add(15, 27, 10));
    console.log(add(10, 20, 30));
    console.log(add(5, 10, 15));

// 10/36

function makeMessage (name, price) {

    const message = `You picked ${name}, price per item is ${price} credits`;
 
   return message;
 };

//  11/36

function calculateTotalPrice (orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = (orderedQuantity * pricePerItem);
  
    // Change code above this line
    return totalPrice;
  };

// 12/36

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  
  const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
    // Change code above this line
    return message;
  }

// 13/36
function isAdult(age) {
    const passed = age >= 18;
    return passed;
  }

// 14/36
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = (SAVED_PASSWORD === password)  
    // Change code above this line
    return isMatch;
  }
  isValidPassword("mangodab3st");
  isValidPassword("kiwirul3z");
  isValidPassword("jqueryismyjam");

// 15/36

function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }

// 16/36
function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    
      if (ordered >= available) { // Change this line
        message = 'Not enough goods in stock!';
      } else {
        message = 'Order is processed, our manager will contact you.';
      }
    
  
    return message;
  }

// 17/36

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// 18/36
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  const credits = customerCredits - totalPrice;
    if (totalPrice > customerCredits) { // Change this line
        message = 'Insufficient funds!';
      } else {
        message = `You ordered ${orderedQuantity} droids, you have ${credits} credits left`;
      }
    // Change code above this line
    return message;
  }

// 19/36

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

// 20/36

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if (ordered === 0) { // Change this line
        message =  'There are no products in the order!';
      } else if (ordered > available) { // Change this line
        message = 'Your order is too large, there are not enough items in stock!';
      } else {
        message = 'The order is accepted, our manager will contact you';
      }
    // Change code above this line
    return message;
  }

// 21/36
function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line
  
    return isInRange;
  }

// 22/36

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  
    return canAccessContent;
  }


//  23/36

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }

// 24/36

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
  if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
  discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
  discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
  discount = BASE_DISCOUNT;
  } 
  
  return discount;
  }

// 25/36




