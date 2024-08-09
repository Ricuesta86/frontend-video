// src/components/VideoPlayer.js
const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className="text-center">Please select a video</div>;
  }

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-semibold mb-4">{video}</h2>
      <video controls className="w-full h-96">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;


