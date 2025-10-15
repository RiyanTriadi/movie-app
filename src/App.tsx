import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import AboutPage from "./pages/AboutPage";
import ReleasePage from "./pages/ReleasePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/release" element={<ReleasePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
