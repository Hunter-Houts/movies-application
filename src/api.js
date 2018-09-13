module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovies: (data) => {
    return fetch('/api/movies', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(response =>  { return console.log("Success: " + JSON.stringify(response))}).catch(error => console.log("Error: " + error))
  },
    removeMovies: (id) => {
    return fetch(`/api/movies/${id}`, {
      method: "DELETE"
    }).then(response => { return console.log("Success: " +  JSON.stringify(response))}).catch(error => console.log("Error: " + error))
    },
    editMovie: (data) => {
        return fetch('/api/movies', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(response =>  { return console.log("Success: " + JSON.stringify(response))}).catch(error => console.log("Error: " + error))
    }
    };
