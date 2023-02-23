import React, { useEffect } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

function DFB(props) {
  const { productType, handleChange, inputVal } = props;

  // Validating input values;

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumeric", (value) => {
      return !isNaN(value);
    });
  });

  const conditionalProduct = () => {
    if (productType === "DVD") {
      return (
        <div>
          <div className="add-product_SNP">
            <label htmlFor="size">Size (MB)</label>
            <TextValidator
              id="size"
              name="size"
              size="small"
              onChange={handleChange}
              value={inputVal.size}
              label="Add Product Size"
              validators={["required", "isNumeric"]}
              errorMessages={[
                "This input can't be empty!",
                "This value must be a number!",
              ]}
            ></TextValidator>
          </div>
          <h5 className="add-product_SNP_desc">
            Please provide the product size in MB.
          </h5>
        </div>
      );
    } else if (productType === "Furniture") {
      return (
        <div>
          {" "}
          <div className="add-product_SNP">
            <label htmlFor="height">Height (CM)</label>
            <TextValidator
              id="height"
              name="height"
              size="small"
              onChange={handleChange}
              value={inputVal.height}
              label="Add Product Height"
              validators={["required", "isNumeric"]}
              errorMessages={[
                "This input can't be empty!",
                "This value must be a number!",
              ]}
            ></TextValidator>
          </div>
          <div className="add-product_SNP">
            <label htmlFor="width">Width (CM)</label>
            <TextValidator
              id="width"
              name="width"
              size="small"
              onChange={handleChange}
              value={inputVal.width}
              label="Add Product Width"
              validators={["required", "isNumeric"]}
              errorMessages={[
                "This input can't be empty!",
                "This value must be a number!",
              ]}
            ></TextValidator>
          </div>
          <div className="add-product_SNP">
            <label htmlFor="length">Length (CM)</label>
            <TextValidator
              id="length"
              name="length"
              size="small"
              onChange={handleChange}
              value={inputVal.length}
              label="Add Palette Name"
              validators={["required"]}
              errorMessages={["This input can't be empty!"]}
            ></TextValidator>
          </div>
          <h5 className="add-product_SNP_desc">
            Please provide dimensions in HxWxL format.
          </h5>
        </div>
      );
    } else {
      return (
        <div>
          <div className="add-product_SNP">
            <label htmlFor="weight">Weight (KG)</label>
            <TextValidator
              id="weight"
              name="weight"
              size="small"
              onChange={handleChange}
              value={inputVal.weight}
              label="Add Product Weight"
              validators={["required"]}
              errorMessages={["This input can't be empty!"]}
            ></TextValidator>
          </div>
          <h5 className="add-product_SNP_desc">
            Please provide the product weight.
          </h5>
        </div>
      );
    }
  };

  return <div>{conditionalProduct()}</div>;
}

export default DFB;
