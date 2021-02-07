import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
	return <MovieContext.Provider value='Hello'>{props.children}</MovieContext.Provider>;
};
