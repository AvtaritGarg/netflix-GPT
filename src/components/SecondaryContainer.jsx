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
      <MovieList title="nowPlayingMovies" movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
