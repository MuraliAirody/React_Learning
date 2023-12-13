import React from "react";
import { useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <div className="d-flex flex-wrap mt-5 gap-5 justify-content-center">
          {cartProducts.map((prod) => (
            <div key={prod.id}>
              <Card
                className=" shadow"
                style={{ width: "300px", height: "450px" }}
              >
                <div className="text-center p-2">
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    className=""
                    style={{ width: "150px", height: "200px" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-5" style={{ height: "20px" }}>
                    <Card.Title className="fs-6">{prod.title}</Card.Title>
                  </div>
                  <div className="mt-4">
                    <Card.Text className="mb-auto text-center">
                      INR. {prod.price}
                    </Card.Text>
                  </div>
                  <Card.Footer className="mt-auto bg-light">
                    <Button
                      onClick={() => removeFromCart(prod.id)}
                      variant="danger"
                      className="w-100"
                    >
                      Remove
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
