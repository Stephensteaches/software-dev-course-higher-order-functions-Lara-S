/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

//const products = [
  //{ name: "Laptop", price: 1000, inStock: true },
  //{ name: "Phone", price: 500, inStock: false },
  //{ name: "Tablet", price: 800, inStock: true },
  //{ name: "Monitor", price: 300, inStock: true },
  //{ name: "Keyboard", price: 100, inStock: false },
//];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/


/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/


/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/


/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/


// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);

// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// Task 1: Filter Products by Availability

function filterProducts(products, callback) { //filterProducts function is being defined were with two parameters,
  //the first is an array of products, and the second is a callback function that will be used to filter the products
  //by either aviailability or price threshold.
  return products.filter(callback);
}
const availableProducts = filterProducts(products, product => product.inStock);
//filters the products array using the filterProducts function and a callback that checks if the product is in stock
const priceOfProducts = filterProducts(products, product => product.price > 500);
//filters the products array using the filterProducts function and a callback that checks if the product price is greater than 500

console.log("Filtered products (in stock):", availableProducts);
//logs the filtered products that are in stock - should return Laptop, Tablet, Monitor
console.log("Filtered products (price > 500):", priceOfProducts);
//logs the filtered products that have a price greater than 500 - should return Laptop, Tablet

// Task 2: Transform Product Names

function productUpperCase(products) {
  return products.map(product => product.name.toUpperCase());
}
const upperCaseNames = productUpperCase(products);
console.log("Uppercased names:)", upperCaseNames);
//logs the uppercased names of the products - should return ["LAPTOP", "PHONE", "TABLET", "MONITOR", "KEYBOARD"]

// Task 3: Generate Discounted Prices

function applyDiscount(discountPercent) {
  return function(product) {
    const discountAmount = (discountPercent / 100) * product.price;
    return product.price - discountAmount;
  }
}

const discount10Percent = applyDiscount(10);
products.forEach(product => product.salePrice = discount10Percent(product));
console.log("Discounted Products:", products);
//logs the products array with a new salePrice that contains the price after the 10% discount

// Task 4: Calculate Total Inventory Value
const totalValue = products.reduce((accumulator, currentProduct) => {
if(currentProduct.inStock) {
  return accumulator + currentProduct.price;
  
}
return accumulator;
}, 0); //0 has to be the initial value to begin the accumulation from
console.log("Initial Total Value in Stock:", totalValue);
//logs the total value of products that are in stock - should return 2100 (1000 + 800 + 300)

//logs total value of products with sale price considered
const totalSaleValue = products.reduce((accumulator, currentProduct) => {
  if(currentProduct.inStock) {
    return accumulator + currentProduct.salePrice;
  }
  return accumulator;
}, 0);
console.log("Total Sale Value in Stock:", totalSaleValue);
//logs the total sale value of products that are in stock - should return 1890 (900 + 720 + 270)


