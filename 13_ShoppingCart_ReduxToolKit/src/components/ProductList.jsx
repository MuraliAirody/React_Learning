import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function ProductList() {
  const [product, getProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  }, []);

  const addToCart=(product)=>{
     dispatch(add(product))
  }

  return (
    <div className="container-fluid" style={{marginTop:'100px'}}>
      <div className="d-flex flex-wrap mt-5 gap-5 justify-content-center">
        {product.map((prod) => (
          <div key={prod.id}>
            <Card
              className=" shadow"
              style={{ width: "300px", height: "450px" }}
            >
              <div className="text-center p-2">
                <Card.Img
                  variant="top"
                  src={prod.image}
                  className="" style={{width:'150px',height:'200px'}}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-5" style={{height:'20px'}}>
                  <Card.Title className="fs-6">{prod.title}</Card.Title>
                </div>
                <div className="mt-4">
                <Card.Text className="mb-auto text-center">
                  INR. {prod.price}
                </Card.Text>
                </div>
                <Card.Footer className="mt-auto bg-light">
                  <Button onClick={()=>addToCart(prod)} variant="primary" className="w-100">
                    Add To Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
