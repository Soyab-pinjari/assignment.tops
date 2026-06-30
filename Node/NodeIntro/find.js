const express = require('express');
const app = express();

const name = process.argv[2];
console.log(`Hello, ${name}!`);

const movies = [
    { id: 1, name: "Jawan" },
    { id: 2, name: "Pathaan" },
    { id: 3, name: "Animal" }
];

function findMovieById(id) {
    return movies.find(movie => movie.id === id);
}

console.log(findMovieById(2));
console.log(findMovieById(3));
console.log(findMovieById(5));
