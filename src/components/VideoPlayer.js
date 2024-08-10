import ReactPlayer from "react-player";

// src/components/VideoPlayer.js
const VideoPlayer = ({ video, onEnded }) => {
  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-semibold mb-4">{video}</h2>
      <ReactPlayer
        controls
        playing
        width={"100%"}
        // pip={`http://localhost:5000/videos/${video}`}
        url={`http://localhost:5000/videos/${video}`}
        onEnded={onEnded}
      />
    </div>
  );
};

export default VideoPlayer;
