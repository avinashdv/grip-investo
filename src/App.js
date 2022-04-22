import "./App.css";
import Home from "./components/Pages/Home";
import Calculator from "./components/Pages/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    // </Router>
  );
}

export default App;
