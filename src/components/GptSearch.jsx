import AIBackground from "./AIBackground";

const GptSearch = () => {
  return (
    <div className="text-white h-screen flex justify-center items-center">
      <AIBackground />
      <div className="absolute bg-gray-700 h-120 w-200 rounded-4xl grid-rows-5">
        <div className="relative z-10 row-span-1 bg-black"></div>
        <div className="relative z-10 row-span-4 bg-white"></div>
      </div>
    </div>
  );
};

export default GptSearch;
