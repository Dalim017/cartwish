import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/Home/HomePage";
import ProductsPage from "./Components/Products/ProductsPage";
import SingleProductPage from "./Components/SingleProduct/SingleProductPage";
import CartPage from "./Components/Cart/CartPage";
import MyOrderPage from "./Components/MyOrder/MyOrderPage";
import LoginPage from "./Components/Authentication/LoginPage";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
