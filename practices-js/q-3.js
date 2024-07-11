// Given an array of employee objects with properties id, name, department, and salary, write a function to:

// Calculate the total salary of all employees.
// Find the employee with the highest salary.
// Return an array of employees sorted by their names in alphabetical order.

const employees = [
  { id: 1, name: 'John', department: 'HR', salary: 50000 },
  { id: 2, name: 'Jane', department: 'Finance', salary: 60000 },
  { id: 3, name: 'Peter', department: 'Engineering', salary: 70000 },
  { id: 4, name: 'Susan', department: 'Marketing', salary: 55000 },
  { id: 5, name: 'Paul', department: 'Sales', salary: 65000 }
];
let sum = employees.reduce((acc,cur) => acc + cur.salary,0)
console.log(sum);

function highestSalary(employees) {
    let highSalary = employees[0]

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > highSalary.salary) {
            highSalary = employees[i]
        }
    }
    return highSalary
}
console.log(highestSalary(employees));

function sortByPrice(employees) {
    return employees.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  
  const sortedProducts = sortByPrice(employees);
  console.log(sortedProducts);
