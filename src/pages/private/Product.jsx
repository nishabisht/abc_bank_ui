import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/styles.css'; 
import savingBank from '../../assets/img/savebank.jpg';
import checkingBank from '../../assets/img/checkBank.jpg';
import creditCard from '../../assets/img/credit.jpg';

const Product = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: 'Savings Account',
      description: 'A savings account with a high interest rate and no monthly fees.',
      image: savingBank
    },
    {
      id: 2,
      title: 'Checking Account',
      description: 'A checking account with no minimum balance requirement and free online banking.',
      image: checkingBank
    },
    {
      id: 3,
      title: 'Credit Card',
      description: 'A credit card with a low interest rate and cashback rewards.',
      image: creditCard
    }
  ];

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1>Our Products</h1>
          <p>Explore our range of banking products designed to meet your financial needs.</p>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col md={4} className="mb-4" key={product.id}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;