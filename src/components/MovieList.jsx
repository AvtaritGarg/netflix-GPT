import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white">
      <div>{title}</div>
      <MovieCard poster_path={movies[0].poster_path} />
    </div>
  );
};

export default MovieList;
