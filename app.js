//const apiKey= '699724c18ea997ccac810f2a678644e5';


const imgUrl = "https://image.tmdb.org/t/p/w500";


// function to get popular movies
function popular() {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=699724c18ea997ccac810f2a678644e5&language=en-US&page=1"
    )
    .then((res) => {
      //console.log(res.data.results);
      
      var movies = res.data.results;
      
      movies.map(movie =>{
        console.log(movie.id);
      })
     
      getData(movies);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to get upcoming movies
function upcoming() {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=699724c18ea997ccac810f2a678644e5&language=en-US&page=1"
    )
    .then((res) => {
      //console.log(res.data.results);
      var movie = res.data.results;
      getData(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}


// function to get movies in english language
function fetchMoviesByLanguage(language) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=699724c18ea997ccac810f2a678644e5&with_original_language=${language}`
      )
      .then((res) => {
        //console.log(res.data.results);
        var movie = res.data.results;
        getData(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }


// function to get movie details
function getData(movie) {
  var output = "";
  movie.forEach(function (elem) {
    // console.log(elem);
    output += `<div class="grid">
    <div class="movieDetail">
    <img src=${imgUrl + elem.poster_path}>
    <div class="text">
    <h5>${elem.original_title}</h5>
    <p>Released: ${elem.release_date}</p>
    </div>
    </div>
    </div>`;
  });
  document.getElementById("container").innerHTML = output;
}

window.onload=()=>{
  upcoming();
}