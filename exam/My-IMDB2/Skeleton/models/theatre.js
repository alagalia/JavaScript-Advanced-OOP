var imdb = imdb || {};

(function (scope) {
    function Theatre (name, length, rating, country, isPuppet) {
        scope._Movie.apply(this,arguments);
        this.isPuppet = isPuppet;
    }
    Theatre.extends(scope._Movie);

    scope.getTheatre =  function (name, length, rating, country, isPuppet) {
        return new Theatre(name, length, rating, country, isPuppet)
    }
})(imdb);