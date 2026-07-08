const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60 p-20 absolute text-white bg-linear-to-r from-black">
      <h1 className="w-2/5 text-5xl font-bold p-6 pl-0">{title}</h1>
      <p className="w-2/5">{overview}</p>
      <div>
        <button className="text-2xl bg-white text-black p-2 m-2 w-1/8 rounded-sm ml-0 mt-4 hover:cursor-pointer hover:bg-white/80">
          ▶ Play
        </button>
        <button className="text-2xl bg-white/30 text-white p-2 m-2 w-1/6 rounded-sm ml-0 hover:cursor-pointer hover:bg-white/20">
          <span>ⓘ More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
