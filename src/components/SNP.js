import React, { useEffect } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import "../styles/addProduct.css";

function SNP(props) {
  const { handleChange, inputVal } = props;

  const { skus } = props;

  //Validating input values;

  useEffect(() => {
    ValidatorForm.addValidationRule("isUnique", (value) => {
      return !skus.includes(value);
    });
    ValidatorForm.addValidationRule("isNumeric", (value) => {
      return !isNaN(value);
    });
    ValidatorForm.addValidationRule("isAlphabetical", (value) => {
      return value.match(/^[A-Za-z0-9]*$/);
    });
  });

  return (
    <div>
      <div className="add-product_SNP">
        <label htmlFor="sku"> SKU</label>
        <TextValidator
          id="sku"
          name="sku"
          size="small"
          onChange={handleChange}
          value={inputVal.sku}
          label="Add Product SKU"
          validators={["required", "isUnique"]}
          errorMessages={[
            "This input can't be empty!",
            "SKU value must be unique!",
          ]}
        ></TextValidator>
      </div>
      <div className="add-product_SNP">
        <label htmlFor="name"> Name</label>
        <TextValidator
          id="name"
          name="name"
          size="small"
          onChange={handleChange}
          value={inputVal.name}
          label="Add Product Name"
          validators={["required", "isAlphabetical"]}
          errorMessages={[
            "This input can't be empty!",
            "This input must not contain special characters or numbers!",
          ]}
        ></TextValidator>
      </div>
      <div className="add-product_SNP">
        <label htmlFor="price"> Price</label>
        <TextValidator
          id="price"
          name="price"
          size="small"
          onChange={handleChange}
          value={inputVal.price}
          label="Add Product Price"
          validators={["required", "isNumeric"]}
          errorMessages={[
            "This input can't be empty!",
            "Input must be a number!",
          ]}
        ></TextValidator>
      </div>
    </div>
  );
}

export default SNP;
