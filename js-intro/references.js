// Primitive data types are COPIED, so changing them does not change the copies.
let x = 5;
let y = x;
let z = y;

x += 1;

console.table({ x, y, z });

// Complex data types are REFERENCED, there is only ONE, so changing updating from any var will update the original by reference

let movie = { title: 'The Web', director: 'Nathan Fielder', rating: 9 };
let movie2 = movie;
// break the reference by making a copy of the object
let movie3 = { ...movie };

console.log(movie);
// If movie3 did not copy the object then this update would be seen by the `movie` and `movie2` pointers.
movie3.rating += 1;
console.log(movie);
console.log(movie2);
console.log(movie3);
