// You are given an array of objects representing products in an online store. Each product has properties: id, name, price, category, and rating. Write a function that performs the following tasks:

// Calculate the average price of all products.
// Find the product with the highest rating.
// Return an array of products sorted by price in ascending order.

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 899.99,
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 49.99,
    category: "Home Appliances",
    rating: 4.0,
  },
  {
    id: 4,
    name: "Headphones",
    price: 199.99,
    category: "Electronics",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Air Fryer",
    price: 129.99,
    category: "Home Appliances",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Keyboard",
    price: 59.99,
    category: "Electronics",
    rating: 4.1,
  },
];

let avgRating =
  products.reduce((acc, cur) => acc + cur.price, 0) / products.length;
console.log(avgRating);

function highRating(products) {
  let productRating = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].rating > productRating.rating) {
      productRating = products[i];
    }
  }
  return productRating;
}
console.log(highRating(products));

function sortByPrice(products) {
  return products.slice().sort((a, b) => a.price - b.price);
}

const sortedProducts = sortByPrice(products);
console.log(sortedProducts);
