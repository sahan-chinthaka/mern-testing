import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Orders.css';
import product1Image from "../Assests/product-1.png";
import product2Image from "../Assests/product-2.png";
import product3Image from "../Assests/product-3.png";

interface Order {
  id: number;
  productName: string;
  orderDate: string;
  price: number;
  expectedDeliveryDate: string;
  status: string;
  image: string;
}

const orders: Order[] = [
  {
    id: 1,
    productName: 'Samsung Galaxy S24',
    orderDate: '2024-07-15',
    price: 999,
    expectedDeliveryDate: '2024-07-22',
    status: 'Shipped',
    image: product1Image,
  },
  {
    id: 2,
    productName: 'Iphone 15 Pro Max',
    orderDate: '2024-07-12',
    price: 1299,
    expectedDeliveryDate: '2024-07-20',
    status: 'Processing',
    image: product2Image,
  },
  {
    id: 3,
    productName: 'Apple Watch Series 9',
    orderDate: '2024-07-10',
    price: 499,
    expectedDeliveryDate: '2024-07-18',
    status: 'Delivered',
    image: product3Image,
  },
];

const Orders: React.FC = () => {
  return (
    <Container className="orders-container">
      <h2>Your Orders</h2>
      <Row>
        {orders.map(order => (
          <Col md={6} lg={4} key={order.id} className="mb-4">
            <Card className="order-card">
              <Card.Body>
                <div className="order-card-content">
                  <Image src={order.image} alt={order.productName} className="order-product-image" />
                  <div className="order-details">
                    <Card.Title>{order.productName}</Card.Title>
                    <Card.Text><strong>Order Date:</strong> {order.orderDate}</Card.Text>
                    <Card.Text><strong>Price:</strong> ${order.price}</Card.Text>
                    <Card.Text><strong>Expected Delivery:</strong> {order.expectedDeliveryDate}</Card.Text>
                    <Card.Text><strong>Status:</strong> {order.status}</Card.Text>
                  </div>
                </div>
                <div className="order-buttons">
                  <Button variant="outline-primary" as={Link as any} to={`/track-order/${order.id}`}>Track Order</Button>
                  <Button variant="outline-secondary" as={Link as any} to={`/invoice/${order.id}`}>View Invoice</Button>
                  <Button variant="outline-danger">Cancel Order</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Orders;
