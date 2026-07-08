import { useSelector } from "react-redux";
import useTrailerKey from "../hooks/useTrailerKey";


const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerKey);
  useTrailerKey(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer + "?autoplay=1&mute=1&controls=0&cc_load_policy=0&cc_lang_pref=none&modestbranding=1&rel=0"}
        title="YouTube video player"
        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
