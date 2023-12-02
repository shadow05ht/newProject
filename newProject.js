let numberOfFilms = +prompt('Neçə kinoya baxmısınız? ');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    private: false
};
for (let i = 0; i < numberOfFilms; i++) {
    let answer1 = prompt('Axırıncı baxdığınız film:');
    let answer2 = +prompt('Bu kinonu neçə bal ilə qiymətləndirirsiz?');
    if (answer1 == "" || answer2 == null || answer1 == null || answer2 == "" || answer1.length > 20) {
        console.log("Səhv baş verdi.");
        i--;
    }
    else {
        personalMovieDb.movies[answer1] = answer2;
    }
}

if (personalMovieDb.count < 10) {
    console.log('Çox az filmə baxmısınız.');
} else if (personalMovieDb.count < 30) {
    console.log('Klassik film izləyicisi.');
} else if (personalMovieDb.count > 30) {
    console.log('Siz kinomansınız.');
} else {
    'Səhv baş verdi.'
}

console.log(personalMovieDb);