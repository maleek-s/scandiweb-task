import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div
      style={{
        height: "94vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Whoops! Something went wrong.
      <div style={{ marginLeft: "10px" }}>
        <Link to="/">
          <Button variant="danger" id="delete-product-btn">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
