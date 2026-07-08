import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerKey = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const { key } = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerKey(key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerKey;