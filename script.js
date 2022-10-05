

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');


// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?=${searchTerm}&page=1&apikey=dd42fda7`;
    const res = await fetch(`${URL}`)
    const data = await res.json();
    // console the data Search
    if(data.Response == 'True') console.log(data.Search);
}

loadMovies('lord of the rings');