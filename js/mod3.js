// 1/41

const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};


// 2/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com"
  }
};

// 3/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

// 4/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

// 5/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

// 6/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.tags.push("trusted");
apartment.owner.name = "Henry Sibola";


// 7/41

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";

// 8/41

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

// 9/41

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]:"henry.carter@aptmail.com",
[passwordInputName]:"jqueryismyjam", 
  // Change code above this line
};

// 10/41

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = ["descr", "rating", "price"];
const values = ["Spacious apartment in the city center", 4, 2153];
// Change code below this line
for (const key in apartment){
console.log(key)
}

// 11/41

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  
}

// 13/41

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys){
  values.push(apartment[key])
} 

// 15/41

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// 16/41


function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);

for (const value of values){
  totalSalary += value
}
  // Change code above this line
  return totalSalary;
}

// 17/41

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex)

  console.log(color)
}
for (const color of colors) {
  rgbColors.push(color.rgb)

  console.log(color)
}

// 18/41

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (const product of products){
  if (productName === product.name) {
    return product.price}
}
return null
  // Change code above this line
}

// 19/41

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const result = [];

for(const el of products) {
  if (el.hasOwnProperty(propName))
  result.push(el[propName])
  }
  return result
}

// 20/41

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
for (product of products) {
  if (product.name === productName) {
    return product.price * product.quantity
  }
}

return 0
  // Пиши код выше этой строки
}

// 21/41

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22/41

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23/41


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line


const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// 24/41

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
   
  hexColors.push(hex);
  rgbColors.push(rgb);
  
  console.log(hex);
  console.log(rgb);
}

// 25/41

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const { 
  today: { 
    low: lowToday, 
    high: highToday, 
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" 
  }, 
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } 
  } = forecast;

  // 26/41

  // Change code below this line
function calculateMeanTemperature(forecast) {

  const { 
    today: { 
      low: todayLow, 
      high: todayHigh, 
    }, 
    tomorrow: { 
      low: tomorrowLow, 
      high: tomorrowHigh,
   } 
   } = forecast
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

  // 27/41

  const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// 28/41


const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// 29/41

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {
...defaultSettings,
...overrideSettings

};

// 30/41

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
return {completed, priority, category, ...data}
  // Change code above this line
}

// 32/41

// Change code below this line
function addOverNum(maxNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > maxNumber) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}


// 33/41

function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for (const number of args) {
if (array.includes(number))
{matches.push(number)}}
  // Change code above this line
  return matches;
}

// 34/41

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },

  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  }
  // Change code above this line
};

// 35/41

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
let bookIndex = this.books.indexOf(oldName);
let newBook = this.books.splice(bookIndex, 1, newName)


    // Change code above this line
  },
};


// 36/41

const atTheOldToad = {
  // Change code below this line
potions: [],


  // Change code above this line
};


// 37/41

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
 getPotions() {
 console.log(this);
  
 return this.potions
 }

};


// 38/41

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
this.potions.push(potionName)
  }
    // Change code above this line
  
};

// 39/41

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
let indexPotionName = this.potions.indexOf(potionName);
this.potions.splice(indexPotionName, 1)


    // Change code above this line
  },
};

// 40/41

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
this.potions.splice(this.potions.indexOf(oldName), 1, newName)

    // Change code above this line
  },
};


// 41/41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
addPotion(newPotion) {
    for(const potion of this.potions) {
    if (potion.name.includes(newPotion.name)) {
     return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
     this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1)
      }
    }
      return `Potion ${potionName} is not in inventory!`;
   },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName
      }
    }
      return `Potion ${oldName} is not in inventory!`;
  }
}
