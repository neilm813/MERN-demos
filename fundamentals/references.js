let x = 5;
let y = x;
let z = y;

x += 1;

// console.log(x, y, z);

function addAmount(num, amount) {
  num += amount;
  console.log(num);
}

// x remains the original value b/c primitives are not pass-by-reference or update-by-reference
// addAmount(x, 4);
// console.log(x);

let movie = { title: 'The Web', director: 'Nathan Fielder', rating: 9 };
let movie2 = movie;
let movie3 = movie;

// console.log(movie);
// // update or mutate by reference
// movie3.rating += 1;
// console.log(movie);
// console.log(movie2);

function increaseRatingByReference(film, amount) {
  film.rating += amount;
  return film;
}

// increaseRatingByReference(movie2, 5);
// console.log(movie3);

function increaseRating(film, amount) {
  const movieCopy = { ...film };
  movieCopy.rating += amount;
  return movieCopy;
}

console.log(increaseRating(movie, 5));
console.log(movie);
