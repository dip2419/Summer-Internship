// You are given an array of book objects where each book has id, title, author, year, and genres (an array of strings). Write a function to:

// Find all books by a particular author.
// Find the most common genre among all books.
// Return an array of books published after a specific year, sorted by title in alphabetical order.

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genres: ["Dystopian", "Science Fiction"],
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Classic"],
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classic"],
  },
];

const res = books.map((n) => {
  return `Book name is ${n.title} and author name is ${n.author}`;
});
console.log(res);

function findMostCommonGenre(books) {
  const genreCount = {};

  books.forEach((book) => {
    book.genres.forEach((genre) => {
      if (genreCount[genre]) {
        genreCount[genre]++;
      
      } else {
        genreCount[genre] = 1;
      }
    });
  });

  let mostCommonGenre = null;
  let maxCount = 0;

  for (const genre in genreCount) {
    if (genreCount[genre] > maxCount) {
      maxCount = genreCount[genre];
      mostCommonGenre = genre;
    }
  }

  return mostCommonGenre;
}

console.log(findMostCommonGenre(books));

function afterYear(books) {
  return books.filter((book) => book.year > 1950);
}
const filterYear = afterYear(books);
console.log(filterYear);

const sorted = filterYear
  .slice()
  .sort((a, b) => a.title.localeCompare(b.title));
console.log(sorted);

const input =  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const res1 = [...new Set(input)]
console.log(res1);

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;

  let sumOfArray = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArray = sumOfArray + arr[i];
  }
  console.log(sumOfArray);
  let missingNumber = sumOfFirstN - sumOfArray;

  return missingNumber;
}

const arr1 = [4, 1, 3];
const missingNumber = findMissingNumber(arr1);
console.log("Missing Number: ", missingNumber);