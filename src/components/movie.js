const movie = ({ movie }) => {
	console.log(movie);
	return (
		<div>
			<h1>{movie.name}</h1>
			<p>{movie.price}</p>
		</div>
	);
};

export default movie;
