import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  if (!nowPlayingMovies) return;

  console.log(nowPlayingMovies);

  return (
    <div>
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
