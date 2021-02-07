import React, { useState, useContext } from 'react';
import Movie from './movie';
import { MovieContext } from './movieContext';
const MovieList = () => {
	let [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			{movies.map((movie) => (
				<Movie movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default MovieList;
