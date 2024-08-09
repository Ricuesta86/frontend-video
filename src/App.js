import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import { Inicio } from "./Inicio";
import { VideoPlay } from "./VideoPlay";
import Layout from './Layout';

// src/App.js


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="video-play/:video" element={<VideoPlay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
