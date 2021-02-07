import { useContext } from 'react';
import movie from './movie';
import { MovieContext } from './movieContext';
const Nav = () => {
	let [movies, setMovies] = useContext(MovieContext);
	return (
		<nav className='bg-dark text-light d-flex justify-content-between '>
			<div className='container d-flex justify-content-between'>
				<h1 className=''>Visshnnu Tejaa</h1>
				<p className='d-flex align-items-center m-0'>
					No. of Movies: <b> {movies.length}</b>
				</p>
			</div>
		</nav>
	);
};

export default Nav;
