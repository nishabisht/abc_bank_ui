import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FundTransfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const validateAccountNumber = (accountNumber) => {
    const regex = /^[0-9]{1,16}$/;
    return regex.test(accountNumber);
  };

  const handleTransfer = () => {
    const newErrors = {};
    if (!validateAccountNumber(fromAccount)) {
      newErrors.fromAccount = 'From Account must be a positive integer with up to 16 digits.';
    }
    if (!validateAccountNumber(toAccount)) {
      newErrors.toAccount = 'To Account must be a positive integer with up to 16 digits.';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Perform fund transfer logic here
    console.log('Transfer initiated');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">Fund Transfer</Card.Title>
              <Form>
                <Form.Group controlId="fromAccount">
                  <Form.Label>From Account</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter from account"
                    value={fromAccount}
                    onChange={(e) => setFromAccount(e.target.value)}
                    isInvalid={!!errors.fromAccount}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fromAccount}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="toAccount">
                  <Form.Label>To Account</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter to account"
                    value={toAccount}
                    onChange={(e) => setToAccount(e.target.value)}
                    isInvalid={!!errors.toAccount}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.toAccount}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" block onClick={handleTransfer}>
                  Transfer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FundTransfer;