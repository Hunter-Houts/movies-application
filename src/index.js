/**
 * es6 modules and imports
 */
const $ = require("jquery");

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies, addMovies, removeMovies, editMovie} = require('./api.js');
$("h1").text("Loading...");
$("p").remove();
function loadMovies(){
    getMovies().then((movies) => {
    $("h1").remove();
    $("#post").removeClass("d-none");
    $("#edit").removeClass("d-none");
    let html = `<table class="table">`
    html += `<thead><tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Rating</th></tr></thead>`
    movies.forEach(({title, rating, id}) => {
        html +=  `<tr>`;
        html += `<th scope="row" id="id">${id}</th>`;
        html += `<td>${title}</td>`;
        html += `<td>Rating: ${rating} <button id=${id}>Remove</button></td> `;
        html += '</tr>';
    });
    // html += `</table>`;
    $("#table").html(html);
    $("td button").click(function(e){
                e.preventDefault()
                let targ = e.target;
                let id = targ.id;
                console.log(id);
                console.log(targ);

                removeMovies(parseInt(id));
                $("#table").html(loadMovies());
            })

}

)}
$(document).ready(loadMovies());

$("#addMovie").click(function(e){
    e.preventDefault();
    let data = {
        "title": $("#movie").val(),
        "rating": $("#Rating").val()
    }
    console.log(data);
  addMovies(data);
  loadMovies();
})
$("#change").click(function(e){
    e.preventDefault();
    let id = $("#movieId").val();
    console.log(id);
    let data = {
        "title": $("#name").val(),
        "rating": $("#ratingChange").val()
    };
    console.log(data)
    editMovie(data, parseInt(id));
    loadMovies();
});




