// You are given an array of course objects with properties id, title, instructor, students (an array of student objects with id and grade), write a function to:

// Calculate the average grade for each course.
// Find the course with the highest average grade.
// Return an array of courses sorted by their average grades in descending order.

const courses = [
  {
    id: 1,
    title: "Math 101",
    instructor: "Dr. Smith",
    students: [
      { id: 1, grade: 90 },
      { id: 2, grade: 85 },
      { id: 3, grade: 88 },
    ],
  },
  {
    id: 2,
    title: "History 101",
    instructor: "Dr. Jones",
    students: [
      { id: 4, grade: 92 },
      { id: 5, grade: 80 },
      { id: 6, grade: 85 },
    ],
  },
  {
    id: 3,
    title: "Science 101",
    instructor: "Dr. Brown",
    students: [
      { id: 7, grade: 85 },
      { id: 8, grade: 87 },
      { id: 9, grade: 90 },
    ],
  },
  {
    id: 4,
    title: "Art 101",
    instructor: "Dr. Wilson",
    students: [
      { id: 10, grade: 95 },
      { id: 11, grade: 90 },
      { id: 12, grade: 93 },
    ],
  },
  {
    id: 5,
    title: "Music 101",
    instructor: "Dr. Johnson",
    students: [
      { id: 13, grade: 88 },
      { id: 14, grade: 85 },
      { id: 15, grade: 87 },
    ],
  },
];

function calculateAverageGrades(courses) {
  courses.forEach((course) => {
    const totalGrades = course.students.reduce(
      (sum, student) => sum + student.grade,
      0
    );
    const averageGrade = totalGrades / course.students.length;
    console.log({...course, averageGrade });
  });
}

let updatedCourses = calculateAverageGrades(courses);

function calculateAverageGrade(students) {
  const total = students.reduce((sum, student) => sum + student.grade, 0);
  return total / students.length;
}

function processCourses(courses) {
  const coursesWithAverages = courses.map((course) => {
    const averageGrade = calculateAverageGrade(course.students);
    return { ...course, averageGrade };
  });

  const courseWithHighestAverage = coursesWithAverages.reduce(
    (maxCourse, course) =>
      course.averageGrade > maxCourse.averageGrade ? course : maxCourse,
    coursesWithAverages[0]
  );

  const sortedCourses = coursesWithAverages.sort(
    (a, b) => b.averageGrade - a.averageGrade
  );

  return {
    courseWithHighestAverage,
    sortedCourses,
  };
}

const result = processCourses(courses);
console.log(
  "Course with the highest average grade:",
  result.courseWithHighestAverage
);
console.log("Courses sorted by average grades:", ...result.sortedCourses);


