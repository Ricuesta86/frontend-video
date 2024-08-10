const VideoItem = ({ video, onSelect }) => {
    return (
      // <div 
      //   className="p-2 border-b cursor-pointer hover:bg-gray-100"
      //   onClick={() => onSelect(video)}
      // >
      //   <h3 className="text-lg font-medium">{video}</h3>
      // </div>
      <li>
      <button onclick={() => onSelect(video)} class="w-full flex items-center p-2 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition ease-in-out">
          <img src="thumbnail1.jpg" alt="Thumbnail" class="w-24 h-14 rounded-md mr-4"/>
          <span class="text-left text-gray-700">{video}</span>
      </button>
  </li>
    );
  };
  
  export default VideoItem;