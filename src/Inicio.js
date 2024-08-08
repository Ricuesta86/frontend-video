
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
// import { Videos } from "./components/Videos";
import { CargarVideos } from "./components/CargarVideos";

export const Inicio = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        {/* <Videos /> */}
        <CargarVideos />
    </div>
  );
};
