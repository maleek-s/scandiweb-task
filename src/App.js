import React, { useEffect, useState } from "react";
import Page404 from "./components/Page404";
import HomePage from "./components/HomePage";
import AddProductPage from "./components/AddProductPage";
import Footer from "./components/Footer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  //Storing all products data in state;
  //Storing all SKUs for form validation on frontend;

  const [allProducts, setAllProducts] = useState([]);
  const [skus, setSkus] = useState([]);

  //API call to get all products from the database;

  function getProducts() {
    axios
      .get("https://maleek-scandiweb-project.000webhostapp.com/")
      .then(function (response) {
        setAllProducts(response.data);
      });
  }

  //Making sure products are loaded on first render;

  useEffect(() => {
    getProducts();
  }, []);

  //Filtering out all SKUs from allProducts;

  useEffect(() => {
    const allSkus = allProducts.map((object) => object.sku) || undefined;
    setSkus(allSkus);
  }, [allProducts]);

  // Router

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Page404 />}></Route>
        <Route
          path="/"
          element={
            <HomePage allProducts={allProducts} getProducts={getProducts} />
          }
        ></Route>
        <Route
          path="/add-product"
          element={<AddProductPage skus={skus} getProducts={getProducts} />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
