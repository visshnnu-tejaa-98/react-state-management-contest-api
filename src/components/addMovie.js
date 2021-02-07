import React, { useState, useContext } from 'react';
import { MovieContext } from './movieContext';
const AddMovie = () => {
	let [name, setName] = useState('');
	let [price, setPrice] = useState('');
	let [movies, setMovies] = useContext(MovieContext);
	const upDateName = (e) => {
		setName(e.target.value);
	};
	const upDatePrice = (e) => {
		setPrice(e.target.value);
	};
	const addMovie = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
	};
	return (
		<form onSubmit={addMovie}>
			<input type='text' name='name' value={name} onChange={upDateName} />
			<input type='text' name='price' value={price} onChange={upDatePrice} />
			<button>Submit</button>
		</form>
	);
};

export default AddMovie;
