import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  
  const cartProducts = useSelector(state=>state.cart.cartProducts)

  return (
    <div >
      <Navbar expand="lg" className="fixed-top bg-body-tertiary p-3">
          <Navbar.Brand href="#home"><b>CART</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Product List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/cart">My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
