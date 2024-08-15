import ReactPlayer from "react-player";

// src/components/VideoPlayer.js
const VideoPlayer = ({ video, onEnded }) => {
  // const handleOnEnded =()=>{
  //   console.log('first')
  // }
  return (
    <div className="w-full h-full ">
      <div className="rounded-xl">
        <ReactPlayer
          controls
          playing
          width={"100%"}
          pip={`http://localhost:5000/videos/${video}`}
          url={`http://localhost:5000/videos/${video}`}
          onEnded={onEnded}
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">{video}</h2>
    </div>
  );
};

export default VideoPlayer;
