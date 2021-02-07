import React, { useState, useContext } from 'react';
import Movie from './movie';
import { MovieContext } from './movieContext';
const MovieList = () => {
	let value = useContext(MovieContext);
	return (
		<div>
			<h1>{value}</h1>
			{/* {movies.map((movie) => (
				<Movie movie={movie} key={movie.id} />
			))} */}
		</div>
	);
};

export default MovieList;
