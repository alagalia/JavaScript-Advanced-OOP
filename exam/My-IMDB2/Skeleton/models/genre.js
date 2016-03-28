var imdb = imdb || {};

(function (scope) {
    var id = 0;
    function Genre (name){
        this._id = ++id;
        this.name = name;
        this._movies = [];
    }

    Genre.prototype.addMovie = function (movie) {
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function (movie) {
       this._movies.filter(function (mv){
            return mv !== movie
        })
    };

    Genre.prototype.deleteMovieById = function (id) {
        this._movies.filter(function (mv){
            return mv._id !== id
        })
    };

    Genre.prototype.getMovies = function (id) {
        return this._movies;
    };

    Genre.prototype.getMoviesById = function (id) {
        return this._movies.filter(function (mv) {
            return mv._id == id;
        });
    };
    scope.getGenre =  function (name){
        return new Genre(name);
    }
})(imdb);