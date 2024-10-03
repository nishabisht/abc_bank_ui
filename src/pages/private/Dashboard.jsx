import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoneyCheckAlt, FaFileInvoiceDollar, FaFileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css"; // Ensure this path is correct
import Transactions from "../private/Transactions";

const Dashboard = () => {
  // Sample data for account overview and recent transactions
  const accountOverview = {
    bankName: "ABC Bank",
    accountNumber: "1234567890",
    balance: "$10,000.00",
  };

  return (
    <Container className="mt-5">
      {/* Dashboard Title */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center" style={{ color: "#043f71" }}>
            Dashboard
          </h2>
        </Col>
      </Row>

      {/* Account Overview & Quick Actions */}
      <Row className="mb-4">
        {/* Account Overview Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 rounded text-color">
            <Card.Body>
              <Card.Title className="mb-4" style={{ color: "#043f71" }}>
                Account Overview
              </Card.Title>
              <Card.Text>
                <strong>Bank Name:</strong> {accountOverview.bankName}
              </Card.Text>
              <Card.Text>
                <strong>Account Number:</strong> {accountOverview.accountNumber}
              </Card.Text>
              <Card.Text>
                <strong>Balance:</strong> {accountOverview.balance}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Quick Actions Section */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 rounded text-color">
            <Card.Body>
              <Card.Title className="mb-4" style={{ color: "#043f71" }}>
                Quick Actions
              </Card.Title>
              <Row>
                {/* Transfer Funds */}
                <Col xs={12} sm={4} className="mb-3">
                  <Link to="/fundTransfer" className="text-decoration-none">
                    <Card className="text-center h-100 action-card no-border shadow-sm">
                      <Card.Body>
                        <FaMoneyCheckAlt size={40} className="mb-2 icon-style" />
                        <Card.Text className="text-color">Transfer Funds</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>

                {/* Pay Bills */}
                <Col xs={12} sm={4} className="mb-3">
                  <Link to="/pay-bills" className="text-decoration-none">
                    <Card className="text-center h-100 action-card no-border shadow-sm">
                      <Card.Body>
                        <FaFileInvoiceDollar size={40} className="mb-2 icon-style" />
                        <Card.Text className="text-color">Pay Bills</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>

                {/* View Statements */}
                <Col xs={12} sm={4} className="mb-3">
                  <Link to="/transactionHistory" className="text-decoration-none">
                    <Card className="text-center h-100 action-card no-border shadow-sm">
                      <Card.Body>
                        <FaFileAlt size={40} className="mb-2 icon-style" />
                        <Card.Text className="text-color">View Statements</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Transactions Section */}
      <Row>
        <Col>
          <Card className="shadow-sm border-0 rounded text-color">
            <Card.Body>
              <Transactions />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
