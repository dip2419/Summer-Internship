// You are given an array of athlete objects with properties id, name, age, events (an array of objects with eventName and position), write a function to:

// Calculate the total number of first-place finishes for each athlete.
// Find the athlete with the most first-place finishes.
// Return an array of athletes sorted by the number of first-place finishes in descending order.

const athletes = [
  {
    id: 1,
    name: "Usain Bolt",
    age: 34,
    events: [
      { eventName: "100m", position: 1 },
      { eventName: "200m", position: 1 },
    ],
  },
  {
    id: 2,
    name: "Michael Phelps",
    age: 35,
    events: [
      { eventName: "100m Butterfly", position: 1 },
      { eventName: "200m Butterfly", position: 2 },
    ],
  },
  {
    id: 3,
    name: "Simone Biles",
    age: 23,
    events: [
      { eventName: "Vault", position: 1 },
      { eventName: "Floor Exercise", position: 1 },
    ],
  },
  {
    id: 4,
    name: "Katie Ledecky",
    age: 24,
    events: [
      { eventName: "400m Freestyle", position: 1 },
      { eventName: "800m Freestyle", position: 1 },
    ],
  },
  {
    id: 5,
    name: "Allyson Felix",
    age: 35,
    events: [
      { eventName: "200m", position: 1 },
      { eventName: "400m", position: 2 },
    ],
  },
];

function getFirstPlaceFinishes(athletes) {
  athletes.forEach((athlete) => {
    athlete.firstPlaceFinishes = athlete.events.filter(
      (event) => event.position === 1
    ).length;
  });

  const athleteWithMostFirstPlaces = athletes.reduce((max, athlete) => {
    return athlete.firstPlaceFinishes > max.firstPlaceFinishes ? athlete : max;
  }, athletes[0]);

  const sortedAthletes = athletes.sort(
    (a, b) => b.firstPlaceFinishes - a.firstPlaceFinishes
  );

  return {
    sortedAthletes,
    athleteWithMostFirstPlaces,
  };
}

const result = getFirstPlaceFinishes(athletes);
console.log(
  "Athletes sorted by first-place finishes:",
  ...result.sortedAthletes
);
console.log(
  "Athlete with the most first-place finishes:",
  result.athleteWithMostFirstPlaces
);
