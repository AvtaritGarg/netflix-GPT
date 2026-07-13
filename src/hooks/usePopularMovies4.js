import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies4 } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies4 = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies4(json));
    console.log(json);
    
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies4;
