// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />  
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<div>🌲Glamping Frontend</div>} />
  </Routes>

  );
}

export default App;
