import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/styles.css"; 

const Transactions = () => {
  // Static transaction data
  const [transactions] = useState([
    { date: '2023-01-01', description: 'Grocery Shopping', amount: '-$50.00' },
    { date: '2023-01-02', description: 'Salary', amount: '+$2,000.00' },
    { date: '2023-01-03', description: 'Electricity Bill', amount: '-$100.00' },
    { date: '2023-01-04', description: 'Restaurant', amount: '-$75.00' },
    { date: '2023-01-05', description: 'Gym Membership', amount: '-$30.00' },
  ]);

  // Function to check if the transaction is credit (positive) or debit (negative)
  const getAmountColor = (amount) => {
    return amount.startsWith('+') ? 'text-success' : 'text-danger';
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center" style={{ color: "#043f71" }}>Recent Transactions</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={10}>
          <Card className="shadow-sm p-4 border-0" style={{ backgroundColor: "#f9f9f9" }}>
            <Card.Body>
              <Table 
                responsive="md" 
                striped 
                hover 
                className="text-center table-modern"
              >
                <thead className="bg-light text-color">
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="transaction-row">
                      <td>{transaction.date}</td>
                      <td>{transaction.description}</td>
                      <td className={getAmountColor(transaction.amount)}>{transaction.amount}</td>
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

export default Transactions;
