import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white p-10 bg-black relative z-30">
      <div className="-mt-56 ">
        <h1 className="text-3xl pl-8 font-semibold">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex p-8 pt-2 pb-48 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
