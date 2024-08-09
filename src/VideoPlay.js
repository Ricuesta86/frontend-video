// import { Header } from "./components/Header";
// import { Sidebar } from "./components/Sidebar";
// import { CargarVideos } from "./components/CargarVideos";
import { useParams } from "react-router-dom";

export const VideoPlay = () => {
  let { video } = useParams();
  return (
    <div>
      <h1>{video}</h1>
        {/* <Header />
        <Sidebar />
        <CargarVideos /> */}
    </div>
  );
};