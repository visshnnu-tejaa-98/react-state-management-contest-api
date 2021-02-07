import MovieList from './components/movieList';
import './App.css';
import { MovieProvider } from './components/movieContext';
import Nav from './components/navbar';

function App() {
	return (
		<MovieProvider>
			<div className='App'>
				<Nav />
				<MovieList />
			</div>
		</MovieProvider>
	);
}

export default App;
