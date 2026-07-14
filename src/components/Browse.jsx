import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies1 from "../hooks/usePopularMovies1";
import usePopularMovies2 from "../hooks/usePopularMovies2";
import usePopularMovies3 from "../hooks/usePopularMovies3";
import usePopularMovies4 from "../hooks/usePopularMovies4";
import usePopularMovies5 from "../hooks/usePopularMovies5";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies1();
  usePopularMovies2();
  usePopularMovies3();
  usePopularMovies4();
  usePopularMovies5();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  {
    /*
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
          - MovieCard * n
  */
  }

  return (
    <div>
      <Header />
      { showGptSearch? (<GptSearch />): (<div> <MainContainer />
      <SecondaryContainer /></div>)
      }
    </div>
  );
};

export default Browse;
