import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionHistory = () => {
  // Sample transaction data
  const transactions = [
    { date: '2023-01-01', description: 'Grocery Shopping', amount: '-$50.00' },
    { date: '2023-01-02', description: 'Salary', amount: '+$2,000.00' },
    { date: '2023-01-03', description: 'Electricity Bill', amount: '-$100.00' },
    { date: '2023-01-04', description: 'Restaurant', amount: '-$75.00' },
    { date: '2023-01-05', description: 'Gym Membership', amount: '-$30.00' },
  ];

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2>Transaction History</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Recent Transactions</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.date}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionHistory;