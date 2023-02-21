import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMovieItem from "../models/IMovieItem";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

const MovieList = (props: any) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				deviceType={props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{
					props.movies.map((movie: IMovieItem) => (
						<div>
							<img src={"img/" + movie.poster} alt='movie'></img>
							<div onClick={() => props.handleFavouritesClick(movie)}>
								<FavouriteComponent />
							</div>
						</div>
					))
				}
			</Carousel>
		</>
	);
};

export default MovieList;