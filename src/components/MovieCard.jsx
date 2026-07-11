const MovieCard = ({ poster_path }) => {
  console.log(poster_path);

  return (
    <div className="w-48 ">
      <img
        className="rounded-md"
        src={"https://image.tmdb.org/t/p/w200" + poster_path}
        alt="MoviePhoto"
      ></img>
    </div>
  );
};

export default MovieCard;
