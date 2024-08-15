import { CargarVideos } from "./components/CargarVideos";
import { Sidebar } from "./components/Sidebar";

export const Inicio = () => {
  return (
    <div>
        <Sidebar />
        <CargarVideos />
    </div>
  );
};
