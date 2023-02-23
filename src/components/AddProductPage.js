import React, { useState } from "react";
import Header from "./Header";
import SNP from "./SNP";
import DFB from "./DFB";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import "../styles/homePage.css";
import "../styles/addProduct.css";

function AddProductPage(props) {
  //Gathering input values in useState;

  const [inputVal, setInputVal] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    height: null,
    width: null,
    length: null,
    weight: null,
  });

  //Keeping track of product type in useState;

  const [productType, setProductType] = useState("DVD");
  const navigate = useNavigate();

  const { skus, getProducts } = props;

  //Making an API call to add products;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://maleek-scandiweb-project.000webhostapp.com/",
        JSON.stringify(inputVal)
      )
      .then(function () {
        getProducts();
      });
    navigate("/");
  };

  // Handling input values;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputVal(() => ({ ...inputVal, [name]: value }));
  };

  // Handling product type changes on select;

  const handleProductTypeChange = (event) => {
    if (event.target.value === "DVD") {
      setInputVal({
        ...inputVal,
        size: "",
        height: null,
        width: null,
        length: null,
        weight: null,
      });
    } else if (event.target.value === "Furniture") {
      setInputVal({
        ...inputVal,
        size: null,
        height: "",
        width: "",
        length: "",
        weight: null,
      });
    } else if (event.target.value === "Book") {
      setInputVal({
        ...inputVal,
        size: null,
        height: null,
        width: null,
        length: null,
        weight: "",
      });
    }
    setProductType(event.target.value);
  };

  return (
    <div className="home-container">
      <ValidatorForm id="product_form" onSubmit={handleSubmit}>
        <Header handleSubmit={handleSubmit}></Header>
        <div className="add-product">
          <div className="add-product_input">
            <SNP
              handleChange={handleChange}
              inputVal={inputVal}
              skus={skus}
            ></SNP>
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                width: "70%",
                marginTop: "2em",
              }}
            >
              <Form.Select
                aria-label="Select Product Type"
                id="productType"
                onChange={handleProductTypeChange}
              >
                <option value="DVD" id="DVD">
                  DVD
                </option>
                <option value="Furniture" id="Furniture">
                  Furniture
                </option>
                <option value="Book" id="Book">
                  Book
                </option>
              </Form.Select>
            </Box>
            <DFB
              productType={productType}
              handleChange={handleChange}
              inputVal={inputVal}
            ></DFB>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default AddProductPage;
