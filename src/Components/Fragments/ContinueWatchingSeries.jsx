import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Elements/Arrow/Arrow";
import MovieDetailModal from "../Elements/Container/MovieDetailModal";
import ContinueWatching from "../Elements/ContinueWatching/ContinueWatching";
import useMovieStore from "../../store/useMovieStore";
const dummyMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    name: "",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 8.5,
    overview: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice when the Joker wreaks havoc on Gotham."
  },
  {
    id: 2,
    title: "Breaking Bad",
    name: "",
    poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    vote_average: 9.4,
    overview: "A high school chemistry teacher turned methamphetamine producer partners with a former student in a bid to secure his family's future."
  },
  {
    id: 3,
    title: "Inception",
    name: "",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    vote_average: 8.7,
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    id: 4,
    title: "Stranger Things",
    name: "",
    poster_path: "/4TKdguyacjYrC1Hnbi3PjSP8r3M.jpg",
    vote_average: 8.3,
    overview: "When a young boy disappears, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
  },
];
const ContinueWatchingSeries = () => {
  // const { movies, loading, error } = useFetchMovies("watchingSeries");
  const { movies, loading, error } = { movies: dummyMovies, loading: false, error: null };
  const { selectedMovie, setSelectedMovie, clearSelectedMovie } =
    useMovieStore();
  const sliderRef = useRef(null);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative w-[309px] sm:w-full h-full group">
      <Arrow
        onScrollLeft={() => sliderRef.current?.slickPrev()}
        onScrollRight={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 -translate-y-1/2 left-2 right-2 z-10 pointer-events-auto"
      />
      <Slider
        ref={sliderRef}
        {...settings}
        className="relative z-0 group-hover:z-20"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="px-1 max-w-full sm:max-w-[160px] md:max-w-[200px] lg:max-w-full max-h-full sm:max-h-[180px]"
          >
            <ContinueWatching
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </Slider>

      {selectedMovie && (
        <MovieDetailModal movie={selectedMovie} onClose={clearSelectedMovie} />
      )}
    </div>
  );
};

export default ContinueWatchingSeries;
