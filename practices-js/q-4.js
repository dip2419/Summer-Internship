// You are given an array of movie objects where each movie has id, title, director, releaseYear, and ratings (an array of numbers). Write a function to:

// Calculate the average rating for each movie.
// Find the movie with the highest average rating.
// Return an array of movies released after the year 2000, sorted by their average rating in descending order.

const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    ratings: [9, 8, 10, 9, 8],
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
    ratings: [10, 9, 10, 10, 9],
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    ratings: [8, 9, 8, 9, 9],
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    releaseYear: 2008,
    ratings: [9, 10, 9, 10, 10],
  },
  {
    id: 5,
    title: "Fight Club",
    director: "David Fincher",
    releaseYear: 1999,
    ratings: [8, 9, 8, 9, 8],
  },
];

function calculateRatings(movies) {
  return movies.map((movie) => {
    const totalRatings = movie.ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRatings / movie.ratings.length;
    return { ...movie, averageRating };
  });
}

function findHighestRatingMovie(moviesWithAverageRatings) {
  return moviesWithAverageRatings.reduce((highest, movie) => {
    return movie.averageRating > highest.averageRating ? movie : highest;
  });
}

const moviesWithAverageRatings = calculateRatings(movies);
const highestAverageRatingMovie = findHighestRatingMovie(
  moviesWithAverageRatings
);

console.log("Movies with Average Ratings:", moviesWithAverageRatings);
console.log("Movie with Highest Average Rating:", highestAverageRatingMovie);

function getMoviesReleasedAfter2000(movies) {
  return movies.filter((movie) => movie.releaseYear > 2000);
}
let releasedYear = getMoviesReleasedAfter2000(movies);
console.log("Movies Released year after 2000",releasedYear);

const sortedByYear = [...releasedYear].sort(
  (a, b) => b.releaseYear - a.releaseYear
);
console.log("Movies sorted by release year",sortedByYear);
