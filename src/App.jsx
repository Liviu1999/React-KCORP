import Navbar from "./navbar";
import "./app.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
