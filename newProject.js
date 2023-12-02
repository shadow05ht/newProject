let numberOfFilms = +prompt('Neşə kinoya baxmısınız? ');


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    private: false
};

let answer1=prompt('Axiriinci baxdiginiz film');
let answer2=+prompt('Nece bal ile qiynetlendirsiz?');
  
personalMovieDb.movies[answer1]=answer2;

console.log(personalMovieDb);