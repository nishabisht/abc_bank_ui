import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/styles.css'; // Ensure this path is correct

const Support = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="mb-3" style={{ color: "#043f71" }}>Customer Support</h1>
          <p className="text-muted">
            If you have any questions or need assistance, please fill out the form below, 
            and our support team will get back to you as soon as possible.
          </p>
        </Col>
      </Row>
      <Row>
        {/* Contact Information */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="mb-4" style={{ color: "#043f71" }}>Contact Information</Card.Title>
              <Card.Text>
                <strong>Email:</strong> <span className="text-muted">support@example.com</span>
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> <span className="text-muted">+1 234 567 890</span>
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> <span className="text-muted">123 Support St, Help City, USA</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Support Form */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <Card.Title className="mb-4" style={{ color: "#043f71" }}>Support Form</Card.Title>
              <Form>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#043f71",
                    borderColor: "#043f71"
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;
