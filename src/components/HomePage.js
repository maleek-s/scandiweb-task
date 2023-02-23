import React from "react";
import SingleProduct from "./SingleProduct";
import Header from "./Header";
import axios from "axios";
import "../styles/homePage.css";

function HomePage(props) {
  //Storing selected products' IDs, this was initially implemented;
  // const [selected, setSelected] = useState([]);

  const { allProducts, getProducts } = props;

  //Fetching alll checkboxes and filtering their values;

  const selected = () => {
    const allCheckboxes = Array.from(
      document.getElementsByClassName("delete-checkbox")
    );
    const filteredCheckboxes = allCheckboxes.map((element) => [
      element.checked,
      element.defaultValue,
    ]);
    return filteredCheckboxes;
  };

  // This was implemented initially. Had to change the way products are selected due to the way AutoQA is set up.

  // const handleSelected = (id) => {
  //   if (selected.includes(id)) {
  //     const newSelected = selected.filter((eachId) => eachId !== id);
  //     setSelected(newSelected);
  //   } else if (!selected.includes(id)) {
  //     const newSelected = [...selected, id];
  //     setSelected(newSelected);
  //   }
  // };

  //API call for deleting products, one is sent for each product ID;

  const deleteProds = () => {
    const data = selected()
      .filter((element) => element[0] === true)
      .map((element) => element[1]);
    data.forEach((item) =>
      axios
        .get(
          `https://maleek-scandiweb-project.000webhostapp.com/${item}/delete`
        )
        .then(function () {
          getProducts();
        })
    );
  };

  return (
    <div className="home-container">
      <Header link="/add-product" deleteProds={deleteProds}></Header>
      <div className="home-container_products_grid">
        {allProducts.length !== 0 ? (
          <div className="home-container_products">
            {allProducts.map((product) => (
              <SingleProduct
                product={product}
                key={product.sku}
                id={product.id}
              />
            ))}
          </div>
        ) : (
          <h4>No products to show.</h4>
        )}
      </div>
    </div>
  );
}

export default HomePage;
