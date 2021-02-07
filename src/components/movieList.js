import React, { useState } from 'react';
import Movie from './movie';
import Nav from './navbar';
const MovieList = () => {
	const [movies, setMovies] = useState([
		{
			id: 2342,
			name: 'Harry Potter',
			price: '$10',
		},
		{
			id: 2343,
			name: 'Game of Throns',
			price: '$12',
		},
		{
			id: 2344,
			name: 'Bahubali',
			price: '$13',
		},
	]);

	return (
		<div>
			<Nav />
			{movies.map((movie) => (
				<Movie movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default MovieList;
