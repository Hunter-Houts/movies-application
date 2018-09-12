/**
 * es6 modules and imports
 */
const $ = require("jquery");

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
$("h1").text("Loading...");
$("p").remove();
$(document).ready(getMovies().then((movies) => {
    $("h1").remove();
    let html = `<table class="table">`
    html += `<thead><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Rating</th></tr></thead>`
    movies.forEach(({title, rating, id}) => {
        html +=  `<tr>`;
        html += `<th scope="row">${id}</th>`;
        html += `<td>${title}</td>`;
        html += `<td>Rating: ${rating}</td>`;
        html += '</tr>';
    });
    html += `</table>`;
    return $("#table").html(html);


}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
}));


