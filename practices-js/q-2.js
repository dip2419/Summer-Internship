// You have an array of student objects where each student has id, name, age, and grades (an array of numbers). Write a function to:
// Calculate the average grade for each student.
// Find the student with the highest average grade.
// Return an array of students sorted by their average grades in descending order.

const students = [
  { id: 1, name: "Alice", age: 20, grades: [85, 90, 92] },
  { id: 2, name: "Bob", age: 22, grades: [78, 82, 88] },
  { id: 3, name: "Charlie", age: 21, grades: [92, 93, 95] },
  { id: 4, name: "David", age: 23, grades: [85, 87, 89] },
  { id: 5, name: "Eve", age: 20, grades: [80, 85, 88] },
];

function calculateAverageGrade(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function processStudents(students) {
  students.forEach((student) => {
    student.averageGrade = calculateAverageGrade(student.grades);
  });
    
  const topStudent = students.reduce((max, student) => {
    return student.averageGrade > max.averageGrade ? student : max;
  }, students[0]);
  console.log(topStudent);

  const sortedStudents = [...students].sort(
    (a, b) => b.averageGrade - a.averageGrade
  );

  return {
    topStudent: topStudent,
    sortedStudents: sortedStudents,
  };
}

const result = processStudents(students);
console.log("Student with highest average grade:", result.topStudent);
console.log("Students sorted by average grades:", result.sortedStudents);
