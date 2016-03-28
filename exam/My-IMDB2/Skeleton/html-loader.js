var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
				var detailsInfo  =  document.querySelectorAll('#movies>ul li');
				var arrLI = Array.prototype.slice.call(detailsInfo);
				arrLI.forEach(function(li) {
					li.addEventListener('click' , function (ev){
						var infoContainer = showMovieInfo(li.getAttribute('data-id'));
						detailsContainer.appendChild(infoContainer)
					})
				})
			}
			function showMovieInfo(id) {
				var movie = genre.getMoviesById(id)[0],
				container =  document.createElement('div');
				container.innerHTML =  '<h3>Actor</h3><ul>';
				movie.getActors().forEach(function(act){
					container.innerHTML +=
						'<li><h4>'+act.name+'</h4>' +
						'<strong>' + 'Bio: </strong>' + act.bio+'<br>' +
						'<strong>'+ 'Born: </strong>'+ act.born+'<br></li>';
				});
				container.innerHTML+='</ul><br><h3>Reviews</h3><ul>';

				movie.getReviews().forEach(function(rv){
					container.innerHTML +=
						'<li><h4>'+rv.author+'</h4>' +
						'<strong>' + 'Bio: </strong>' + rv.content+'<br>' +
						'<strong>'+ 'Born: </strong>'+ rv.date+'<br></li>';
				});
				container.innerHTML+='</ul><br>';

				return container;
			}
		});

		// Task 2 - Add event listener for movies boxes


		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	scope.loadHtml = loadHtml;
}(imdb));