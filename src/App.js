import "./App.css";
//components
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
//react-router-dom
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />

      </Routes>
    </div>
  );
}

export default App;
