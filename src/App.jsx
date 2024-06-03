import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/Cart";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { Categories } from "./pages/Categories";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./pages/ProductDetails";
import { Footer } from "./components/Footer";
import { ProductsProvider } from "./context/FetchContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/LoginRegister";
import { CategoryProducts } from "./components/CategoryProducts";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ProductsProvider>
          <AuthProvider>
            <div>
              <Navbar />
              <Footer />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:itemId" element={<ProductDetails />} />
                <Route path="/category/:category" element={<CategoryProducts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </AuthProvider>
        </ProductsProvider>
      </Provider>
    </Router>
  );
}

export default App;
