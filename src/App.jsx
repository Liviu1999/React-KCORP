import Navbar from "./navbar";
import "./app.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Esport from "./Components/Esport/Esport";
import Ultras from "./Components/Ultras/Ultras";
import Search from "./Components/Search";
import ProductKC from "./Components/ProductKC";
import Partenaires from "./Components/Partenaires";
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
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/ultras" element={<Ultras />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/kc" element={<ProductKC />} />
          <Route path="/404" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
