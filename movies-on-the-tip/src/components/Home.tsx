import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';

function Home() {

	return (
		<>
			<div className='container-fluid movie-app'>
				<div className='row d-flex align-items-center mt-4 mb-4'>
					<MovieListHeading heading='Movies' />
					{/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
					<SearchBox />
				</div>
				<div className='row'>
					{/* <MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/> */}
				</div>
				<div className='row d-flex align-items-center mt-4 mb-4'>
					<MovieListHeading heading='Favourites' />
				</div>
				<div className='row'>
					{/* <MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/> */}
				</div>
			</div>
		</>
	);
}

export default Home;
