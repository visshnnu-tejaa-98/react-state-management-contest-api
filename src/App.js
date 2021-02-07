import MovieList from './components/movieList';
import './App.css';
import { MovieProvider } from './components/movieContext';
import Nav from './components/navbar';
import AddMovie from './components/addMovie';

function App() {
	return (
		<MovieProvider>
			<div className='App'>
				<Nav />
				<AddMovie />
				<MovieList />
			</div>
		</MovieProvider>
	);
}

export default App;
