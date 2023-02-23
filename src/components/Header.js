import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/homePage.css";

function Header(props) {
  const { link, deleteProds } = props;

  return (
    <div className="home-container_top">
      <Container fluid className="p-0">
        {link === "/add-product" ? (
          <Row style={{ marginRight: "0", marginLeft: "0" }}>
            <Col xs={5} sm={6}>
              <h2>Product List</h2>
            </Col>
            <Col
              xs={7}
              sm={6}
              className="pe-0"
              style={{ display: "flex", justifyContent: "flex-end" }}
              expand="sm"
            >
              <Link to={link}>
                <Button variant="primary">ADD</Button>
              </Link>
              <Button
                variant="danger"
                id="delete-product-btn"
                type="submit"
                onClick={deleteProds}
              >
                MASS DELETE
              </Button>
            </Col>
          </Row>
        ) : (
          <Row style={{ marginRight: "0", marginLeft: "0" }}>
            <Col xs={5} sm={6}>
              <h2>Product Add</h2>
            </Col>
            <Col
              xs={7}
              sm={6}
              className="pe-0"
              style={{ display: "flex", justifyContent: "flex-end" }}
              expand="sm"
            >
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Link to="/">
                <Button variant="danger" id="delete-product-btn">
                  Cancel
                </Button>
              </Link>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
