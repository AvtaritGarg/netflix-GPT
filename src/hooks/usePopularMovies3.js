import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies3 } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies3 = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies3(json));
    
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies3;
