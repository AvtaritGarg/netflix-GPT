import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies2 } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies2 = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies2(json));
    console.log(json);
    
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies2;
