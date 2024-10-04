import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Account = () => {
  // Sample account data
  const accountData = {
    bankName: "ABC Bank",
    accountNumber: "1234567890",
    amount: "$10,000.00"
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">Account Management</Card.Title>
              <Card.Text>
                <strong>Bank Name:</strong> {accountData.bankName}
              </Card.Text>
              <Card.Text>
                <strong>Account Number:</strong> {accountData.accountNumber}
              </Card.Text>
              <Card.Text>
                <strong>Amount:</strong> {accountData.amount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;