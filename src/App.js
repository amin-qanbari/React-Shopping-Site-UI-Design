import "./App.css";
//components
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Nightweare from "./pages/Nightweare";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tshirt from "./pages/Tshirt";
import Shirt from "./pages/Shirt";
import LightJacket from "./pages/LightJacket";
import ProductDetail from "./pages/ProductDetail";


//react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/autumn" element={<Autumn />} />
        <Route path="/nightwear" element={<Nightweare />} />
        <Route path="/t-shirt" element={<Tshirt />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/lightJacket" element={<LightJacket />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
