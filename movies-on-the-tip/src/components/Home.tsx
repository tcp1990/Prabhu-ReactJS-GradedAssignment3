import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import { getUpcominMovies, getMoviesInTheaters, getTopRatedIndia, getTopRatedMovies } from '../services/movies';
import IMovieItem from '../models/IMovieItem';

const options = ['Coming Soon', 'Movies in Theaters', 'Top rated Indian', 'Top Rated Movies'];

function Home() {

	const [movies, setMovies] = useState<IMovieItem[]>([]);
	const [favourites, setFavourites] = useState<IMovieItem[]>([]);
	const [searchValue, setSearchValue] = React.useState<string | null>(options[0]);
	const [inputValue, setInputValue] = React.useState('');

	useEffect(() => {
		const getMovies = async () => {
			try {
				switch (searchValue) {
					case options[0]:
						const upcomingMovieData = await getUpcominMovies();
						setMovies(upcomingMovieData);
						break;
					case options[1]:
						const moviesInTheatersData = await getMoviesInTheaters();
						setMovies(moviesInTheatersData);
						break;
					case options[2]:
						const topRatedIndiaData = await getTopRatedIndia();
						setMovies(topRatedIndiaData);
						break;
					case options[3]:
						const topRatedMoviesData = await getTopRatedMovies();
						setMovies(topRatedMoviesData);
						break;

				}
			} catch (error) {

			} finally {

			}
		};

		getMovies();
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites') || '{}'
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items: IMovieItem[]) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie: IMovieItem) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie: IMovieItem) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== movie.id
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};


	return (

		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox
					options={options}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					inputValue={inputValue}
					setInputValue={setInputValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
}

export default Home;
