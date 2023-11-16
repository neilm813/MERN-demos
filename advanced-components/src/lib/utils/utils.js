import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* 
A util is just a function, but a component is also a function, the difference is a component is a reusable function
that returns JSX to be rendered, while a util is a function that does not return JSX.
*/

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
