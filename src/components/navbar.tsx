import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/Pages/CartContext';

const NavScrollExample: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartCount } = cartContext;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleOrdersClick = () => {
    navigate('/orders'); // Navigate to the Orders page
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Button variant="primary" className="rounded-pill" onClick={handleLoginClick}>
          Login
        </Button>{' '}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={handleOrdersClick}>Orders</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button
              variant="outline-primary"
              onClick={handleCartClick}
              style={{ marginLeft: '20px', position: 'relative' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '12px',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
