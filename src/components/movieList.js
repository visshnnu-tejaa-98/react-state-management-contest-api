import React, { useState } from 'react';
import Movie from './movie';
import Nav from './navbar';
const MovieList = () => {
	return (
		<div>
			<Nav />
			{/* {movies.map((movie) => (
				<Movie movie={movie} key={movie.id} />
			))} */}
		</div>
	);
};

export default MovieList;
