import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const popularMovies1 = useSelector((store) => store.movies.popularMovies1);
  const popularMovies2 = useSelector((store) => store.movies.popularMovies2);
  const popularMovies3 = useSelector((store) => store.movies.popularMovies3);
  const popularMovies4 = useSelector((store) => store.movies.popularMovies4);
  const popularMovies5 = useSelector((store) => store.movies.popularMovies5);

  if(!nowPlayingMovies) return;
  if(!popularMovies1) return;
  if(!popularMovies2) return;
  if(!popularMovies3) return;
  if(!popularMovies4) return;
  if(!popularMovies5) return;

  return (
    <div>
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={popularMovies4?.results} />
      <MovieList title="Suggested for You" movies={popularMovies2?.results} />
      <MovieList title="Movies You Might Like" movies={popularMovies3?.results} />
      <MovieList title="Top Picks Today" movies={popularMovies1?.results} />
      <MovieList title="Upcoming Movies" movies={popularMovies5?.results} />
      <MovieList title="Critically Acclaimed Shows" movies={popularMovies2?.results} />
    </div>
  );
};

export default SecondaryContainer;
