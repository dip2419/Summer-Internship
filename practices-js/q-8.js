// You are given an array of employee objects with properties id, name, age, and projects (an array of objects with projectName and hours). Write a function to:

// Calculate the total hours worked by each employee.
// Find the employee with the most hours worked.
// Return an array of employees sorted by their total hours worked in descending order.

const employees = [
  {
    id: 1,
    name: "John",
    age: 28,
    projects: [
      { projectName: "A", hours: 120 },
      { projectName: "B", hours: 80 },
    ],
  },
  {
    id: 2,
    name: "Jane",
    age: 32,
    projects: [
      { projectName: "A", hours: 90 },
      { projectName: "C", hours: 110 },
    ],
  },
  {
    id: 3,
    name: "Peter",
    age: 40,
    projects: [
      { projectName: "B", hours: 100 },
      { projectName: "C", hours: 95 },
    ],
  },
  {
    id: 4,
    name: "Susan",
    age: 35,
    projects: [
      { projectName: "A", hours: 130 },
      { projectName: "B", hours: 75 },
    ],
  },
  {
    id: 5,
    name: "Paul",
    age: 30,
    projects: [
      { projectName: "C", hours: 85 },
      { projectName: "B", hours: 105 },
    ],
  },
];
function totalHours(employees) {
  return employees.map((employee) => {
    const totalHours = employee.projects.reduce(
      (total, projects) => total + projects.hours,
      0
    );
    return { ...employee, totalHours };
  });
}
const updateEmployees = totalHours(employees);
console.log(
  "Add property of totalHours worked by each employee",
  ...updateEmployees
);

function findMostHours(employees) {
  let highestHours = employees[0];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].totalHours > highestHours.totalHours) {
      highestHours = employees[i];
    }
  }
  return highestHours;
}
const findEmployeeMostHoursWork = findMostHours(updateEmployees);
console.log(
  "Find the employee with the most hours worked",
  findEmployeeMostHoursWork
);

function descending(n) {
    return n.sort((a,b) => b.totalHours - a.totalHours, 0)
    
}
const sorted = descending(updateEmployees)
console.log("Return an array of employees sorted by their total hours worked in descending order",...sorted);