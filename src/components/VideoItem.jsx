const VideoItem = ({ video, onSelect }) => {
    return (
      <div 
        className="p-2 border-b cursor-pointer hover:bg-gray-100"
        onClick={() => onSelect(video)}
      >
        <h3 className="text-lg font-medium">{video}</h3>
      </div>
    );
  };
  
  export default VideoItem;