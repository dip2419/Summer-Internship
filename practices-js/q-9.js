// Given an array of game objects where each game has id, title, developer, releaseYear, and ratings (an array of numbers), write a function to:

// Calculate the average rating for each game.
// Find the game with the highest average rating.
// Return an array of games released before the year 2010, sorted by their average rating in descending order.

const games = [
  {
    id: 1,
    title: "The Witcher 3",
    developer: "CD Projekt",
    releaseYear: 2015,
    ratings: [9, 10, 10, 9, 10],
  },
  {
    id: 2,
    title: "Red Dead Redemption",
    developer: "Rockstar Games",
    releaseYear: 2010,
    ratings: [9, 8, 9, 10, 9],
  },
  {
    id: 3,
    title: "The Last of Us",
    developer: "Naughty Dog",
    releaseYear: 2013,
    ratings: [10, 9, 10, 9, 10],
  },
  {
    id: 4,
    title: "Grand Theft Auto V",
    developer: "Rockstar Games",
    releaseYear: 2013,
    ratings: [10, 10, 9, 9, 10],
  },
  {
    id: 5,
    title: "Half-Life 2",
    developer: "Valve",
    releaseYear: 2004,
    ratings: [10, 10, 10, 10, 9],
  },
];

function averageRating(games) {
  return games.map((game) => {
    let averageRating =
      game.ratings.reduce((total, rate) => total + rate, 0) / 5;
    return { ...game, averageRating };
  });
}
const averageRating1 = averageRating(games);
console.log("Calculate the average rating for each game ",averageRating1);

function highestRating(games) {
  let highRating = games[0];

  for (let i = 0; i < games.length; i++) {
    if (games[i].averageRating > highRating.averageRating) {
      highRating = games[i];
    }
  }
  return highRating;
}
const highestRating1 = highestRating(averageRating1);
console.log("Find the game with the highest average rating.", highestRating1);

function filterReleseYear(games) {
  return games.filter((n) => n.releaseYear <= 2010);
}
const filter = filterReleseYear(averageRating1);
console.log("Return an array of games released before the year 2010 ",filter);

const sorted = filter.sort((a, b) => {
  b.averageRating - a.averageRating, 0;
});
console.log("sorted by their average rating in descending order ",sorted);
