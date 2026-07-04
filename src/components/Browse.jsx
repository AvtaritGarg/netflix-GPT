import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-32 pl-12 text-center">
        <h1 className="text-8xl align-middle">Coming soon.</h1>
      </div>
    </div>
  );
};

export default Browse;
