import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/LangConstants";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const currentLang = useSelector((store)=> store.config.lang)
  
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
      <MovieList title={lang[currentLang].movieList1} movies={nowPlayingMovies} />
      <MovieList title={lang[currentLang].movieList2} movies={popularMovies4?.results} />
      <MovieList title={lang[currentLang].movieList3} movies={popularMovies2?.results} />
      <MovieList title={lang[currentLang].movieList4} movies={popularMovies3?.results} />
      <MovieList title={lang[currentLang].movieList5} movies={popularMovies1?.results} />
      <MovieList title={lang[currentLang].movieList6} movies={popularMovies5?.results} />
      <MovieList title={lang[currentLang].movieList7} movies={popularMovies2?.results} />
    </div>
  );
};

export default SecondaryContainer;
