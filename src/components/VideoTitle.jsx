const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 p-20">
      <h1 className="w-2/5 text-5xl font-bold p-6 pl-0">{title}</h1>
      <p className="w-2/5">{overview}</p>
      <div>
        <button className="text-2xl bg-gray-600 text-white p-2 m-2 w-1/8 rounded-sm ml-0 mt-4">▶ Play</button>
        <button className="text-2xl bg-gray-600 text-white p-2 m-2 w-1/6 rounded-sm ml-0"> ⓘ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;


