import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>This is an Alert</Alert>}
      <Button onClick={()=> {setAlertVisibility(true)}}>Klik Disini</Button>
    </div>
  );
}

export default App;
