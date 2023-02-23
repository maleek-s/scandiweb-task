import React from "react";
import Form from "react-bootstrap/Form";

import "../styles/homePage.css";
import "../styles/singleProduct.css";

function SingleProduct(props) {
  const { product, id } = props;

  //This function was initially implemented for selecting prducts;

  // const handleSelect = (e) => {
  //   handleSelected(key);
  // };

  return (
    <div className="home-container_products_single">
      <div className="home-container_products_single_container">
        <Form>
          {
            <div className="mb-0 home-container_products_single_container_checkbox">
              <input
                type="checkbox"
                className="delete-checkbox"
                id="delete-checkbox"
                key={id}
                value={id}
              />
            </div>
          }
        </Form>
        <h3>SKU: {product.sku}</h3>
        <h3>Name: {product.name}</h3>
        <p>Price: ${product.price}</p>
        {product.size ? <p>Size: {product.size} MB</p> : undefined}
        {product.height ? (
          <p>
            Dimensions: {product.height}x{product.width}x{product.length}
          </p>
        ) : undefined}
        {product.weight ? <p>Weight: {product.weight} KG</p> : undefined}
      </div>
    </div>
  );
}

export default SingleProduct;
