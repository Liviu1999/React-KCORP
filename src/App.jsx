import Navbar from "./navbar";
import "./app.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Esport from "./Components/Esport/Esport";
import Ultras from "./Components/Ultras/Ultras";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/esport" element={<Esport />} />
          <Route path="/ultras" element={<Ultras />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/404" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
