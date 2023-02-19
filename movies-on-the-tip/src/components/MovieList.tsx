import IMovieItem from "../models/IMovieItem";

const MovieList = (props : any) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie : IMovieItem) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.posterurl} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;