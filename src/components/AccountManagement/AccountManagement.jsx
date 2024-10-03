import React from 'react';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/styles.css'; // Ensure this path is correct

const AccountManagement = () => {
  // Sample account data
  const accounts = [
    { id: 1, accountNumber: '1234567890', accountType: 'Savings', balance: '$10,000.00' },
    { id: 2, accountNumber: '0987654321', accountType: 'Checking', balance: '$5,000.00' }
  ];

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Account Management</h1>
          <p className="text-center">
            Manage your accounts, view balances, and perform transactions easily.
          </p>
        </Col>
      </Row>
      
      <Row>
        {/* Add New Account Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 rounded">
            <Card.Body>
              <Card.Title className="mb-4">Add New Account</Card.Title>
              <Form>
                <Form.Group controlId="formAccountType">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control as="select" className="rounded">
                    <option>Savings</option>
                    <option>Checking</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formAccountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter your account number" 
                    min="0" 
                    required 
                    className="rounded"
                  />
                  <Form.Text className="text-muted">
                    Please enter a valid account number (e.g., 123456789).
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formInitialDeposit">
                  <Form.Label>Initial Deposit</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter initial deposit amount" 
                    className="rounded"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 my-2 rounded">
                  Add Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Transfer Funds Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 rounded">
            <Card.Body>
              <Card.Title className="mb-4">Transfer Funds</Card.Title>
              <Form>
                <Form.Group controlId="formFromAccount">
                  <Form.Label>From Account</Form.Label>
                  <Form.Control as="select" className="rounded">
                    {accounts.map(account => (
                      <option key={account.id}>{account.accountNumber} - {account.accountType}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formToAccount">
                  <Form.Label>To Account</Form.Label>
                  <Form.Control as="select" className="rounded">
                    {accounts.map(account => (
                      <option key={account.id}>{account.accountNumber} - {account.accountType}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter amount to transfer" 
                    className="rounded"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 my-2 rounded">
                  Transfer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Account Overview Section */}
      <Row>
        <Col>
          <Card className="shadow-sm border-0 rounded">
            <Card.Body>
              <Card.Title className="mb-4">Account Overview</Card.Title>
              <Table responsive bordered hover className="text-center">
                <thead className="bg-light">
                  <tr>
                    <th>Account Number</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map(account => (
                    <tr key={account.id}>
                      <td>{account.accountNumber}</td>
                      <td>{account.accountType}</td>
                      <td>{account.balance}</td>
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

export default AccountManagement;
