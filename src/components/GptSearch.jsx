import { useSelector } from "react-redux";
import lang from "../utils/LangConstants";
import AIBackground from "./AIBackground";

const GptSearch = () => {
  console.log(lang);
  const configLang = useSelector((store)=>store.config.lang)
  
  return (
    <div className="relative text-white h-screen flex justify-center items-center">
      <AIBackground />
      <div className="relative grid bg-gray-700 h-120 w-200 rounded-4xl grid-rows-5">
        <div className="relative z-10 row-span-1 mx-8 m-4">
          <form className="grid grid-cols-5 w-full">
            <input
              type="text"
              placeholder = {lang[configLang].searchText}
              className="col-span-4 bg-black rounded-4xl m-2 p-4"
            />
            <button className="col-span-1 bg-red-900 rounded-4xl m-2">{lang[configLang].search}</button>
          </form>
        </div>
        <div className="relative z-10 row-span-4 flex justify-center">
          <div className="w-11/12 h-11/12 bg-white rounded-4xl "></div>
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
