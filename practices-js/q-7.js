// Given an array of customer objects where each customer has id, name, age, purchases (an array of objects with item and amount), write a function to:

// Calculate the total amount spent by each customer.
// Find the customer who spent the most.
// Return an array of customers sorted by their total spending in descending order.

const customers = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    purchases: [
      { item: "Laptop", amount: 1200 },
      { item: "Phone", amount: 800 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    purchases: [
      { item: "TV", amount: 500 },
      { item: "Headphones", amount: 100 },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    purchases: [
      { item: "Laptop", amount: 1500 },
      { item: "Tablet", amount: 300 },
    ],
  },
  {
    id: 4,
    name: "David",
    age: 40,
    purchases: [
      { item: "Phone", amount: 900 },
      { item: "Watch", amount: 200 },
    ],
  },
  {
    id: 5,
    name: "Eve",
    age: 28,
    purchases: [
      { item: "Camera", amount: 600 },
      { item: "Lens", amount: 400 },
    ],
  },
];

function calculateTotalAmountSpent(customers) {
  return customers.map((customer) => {
    const totalAmountSpent = customer.purchases.reduce(
      (total, purchase) => total + purchase.amount,
      0
    );
    return { ...customer, totalAmountSpent };
  });
}

const updatedCustomers = calculateTotalAmountSpent(customers);
console.log("Add TotalAmount Property",...updatedCustomers);

function spendingHighAmount(customers) {
  let highAmount = customers[0];

  for (let i = 0; i < customers.length; i++) {
    if (customers[i].purchases.amount > highAmount.purchases.amount) {
      highAmount = customers[i];
    }
  }
  return highAmount;
}
console.log("Find highest amount spent by customer",spendingHighAmount(customers));

function descending(n) {
  return n.sort((a, b) => b.totalAmountSpent - a.totalAmountSpent, 0);
}
const res = descending(updatedCustomers);
console.log("customers sorted by their total spending in descending order",...res);

