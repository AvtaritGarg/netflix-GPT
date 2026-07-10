const MovieCard = ({poster_path}) => {
  console.log(poster_path);
  
  return (<div>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt="MoviePhoto"></img>
    </div>)
};

export default MovieCard;