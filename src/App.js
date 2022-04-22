import "./App.css";
import Home from "./components/Pages/Home";
import Calculator from "./components/Pages/Calculator";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
