import React, { useState } from 'react';
const AddMovie = () => {
	let [name, setName] = useState('');
	let [price, setPrice] = useState('');
	const upDateName = (e) => {
		setName(e.target.value);
	};
	const upDatePrice = (e) => {
		setPrice(e.target.value);
	};
	return (
		<div>
			<input type='text' name='name' value={name} onChange={upDateName} />
			<input type='text' name='price' value={price} onChange={upDatePrice} />
			<button>Submit</button>
		</div>
	);
};

export default AddMovie;
