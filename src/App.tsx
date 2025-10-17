import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/browse" element={<BrowsePage/>}/>
      </Routes>
    </>
  );
}

export default App;
