import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./ProductListing.css";
import rightPic from "../images/ece5.png";
import {FcInTransit} from "react-icons/fc";

const ProductListing = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };
  //console.log(users[0].id);
  //console.log(users)

  useEffect(() => {
    fetchData();
  }, []);

  if (users.length === 0) {
    return <div>...Loading</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 upperArea">
          <span className="carryCar"><FcInTransit size={100}/></span>
          <div className="leftDetails">
            <h1 id="leftTit">Free Home Delivery</h1>
          </div>
          <h5 className="leftDetails" id="leftTitB">Buy Everythings On Your Own Choice!</h5>
          <p className="leftPara">Welcome to our online shopping destination, where your retail desires meet convenience. Explore a world of endless choices from the comfort of your home. Discover a wide range of high-quality products, from fashion and electronics to home essentials and more!</p>
        </div>
        <div className="col-sm-6 upperArea">
          <img src={rightPic} alt="right Side pic" className="rightSidePic"/>
        </div>
      </div>
      <div className="row">
        <h4 className="productsName">Products</h4>
        <div className="col-sm-12">
          <Row xs={1} md={4} className="g-4">
            {users.map((item) => (
              <Col>
                <Link to={`/details/${item.id}`}>
                  <Card id="myCard">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="image"
                    />
                    <Card.Body>
                      <Card.Title id="title">{item.title}</Card.Title>
                      <p className="price">
                        <b>${item.price}</b>
                      </p>
                      <Link to="/carts" className="Links">
                        <button className="button">
                          <b>Add To Cart</b>
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row><br></br>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
