import { API_KEY } from "../utils/constants"
import Header from "./Header"
import { useEffect } from "react";

const Browse = () => {

    const getNowPlayingMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_KEY);
        const json = await data.json()
        console.log(json.results);
    } 

    useEffect(() => {
        getNowPlayingMovieList();
    }, []);


    return (
        <div>
            <div>
            <Header/>
            </div>
            <div className="pt-32 pl-12 text-center">
            <h1 className="text-8xl align-middle">Coming soon.</h1>
            </div>
        </div>
    )
}

export default Browse