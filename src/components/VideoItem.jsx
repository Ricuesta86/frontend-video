// import ReactPlayer from "react-player";

const VideoItem = ({ video, onSelect }) => {
  const handleSplit = (video) => {
    let partes = video.split(".");
    return partes[0];
  };

  return (
    <li>
      <button
        onClick={() => onSelect(video)}
        className="w-full flex items-center p-2 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition ease-in-out"
      >
        <div className="w-2/5 rounded-md mr-4 ">
          <img
            src={`/image/${handleSplit(video)}.png`}
            alt={handleSplit(video)}
            className="w-full block rounded-[20px] cursor-pointer"
          />
        </div>
        <span className="w-3/5 capitalize text-left text-gray-700 font-bold line-clamp-2 ">
          {video}
        </span>
      </button>
    </li>
  );
};

export default VideoItem;
