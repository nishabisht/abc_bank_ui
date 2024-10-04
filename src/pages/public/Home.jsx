import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FaPiggyBank, FaBusinessTime, FaChartLine, FaLaptop, FaMobileAlt } from 'react-icons/fa'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css"; 
import Banner from "./Banner";
import contactUs from "../../assets/img/contact.jpg";
import about from "../../assets/img/about.jpg";

const iconStyle = {
  color: "#043f71", // Default icon color
  transition: "color 0.3s ease", // Smooth transition on hover
};

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Banner />
      
      {/* About Section */}
      <section id="about" className="my-5 py-5 bg-light">
        <Container>
     <Row className="align-items-center">
      {/* Text Content on the Left */}
      <Col md={6}>
        <h2 className="mb-4" style={{ color: "#043f71" }}>About Us</h2>
        <p className="text-muted mb-4">
          At ABC Bank, we are committed to providing exceptional financial services to our customers. 
          Our mission is to empower individuals and businesses to achieve their financial goals through 
          innovative banking solutions and personalized customer service. With a rich history of trust 
          and excellence, we strive to be your reliable partner in financial success.
        </p>
        <Button variant="primary" className="mt-2">Learn More</Button>
      </Col>

      {/* Image on the Right */}
      <Col md={6}>
        <img 
          src={about} // Adjust the path based on your project structure
          alt="About Us"
          className="img-fluid" 
          style={{ borderRadius: '10px' }} // Optional styling for rounded corners
        />
      </Col>
    </Row>
  </Container>
</section>

      {/* Services Section */}
      <section id="services" className="my-5 py-5">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="mb-3" style={{ color: "#043f71" }}>Our Services</h2>
              <p className="text-muted">We offer a wide range of services to meet your financial needs.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaPiggyBank 
                    size={50} 
                    style={iconStyle} 
                    className="service-icon"
                  />
                  <Card.Title style={{ color: "#043f71" }}>Personal Banking</Card.Title>
                  <Card.Text style={{ color: "#043f71" }}>
                    Checking and savings accounts, personal loans, and credit cards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaBusinessTime 
                    size={50} 
                    style={iconStyle} 
                    className="service-icon"
                  />
                  <Card.Title style={{ color: "#043f71" }}>Business Banking</Card.Title>
                  <Card.Text style={{ color: "#043f71" }}>
                    Business accounts, loans, and merchant services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaChartLine 
                    size={50} 
                    style={iconStyle} 
                    className="service-icon"
                  />
                  <Card.Title style={{ color: "#043f71" }}>Investment Services</Card.Title>
                  <Card.Text style={{ color: "#043f71" }}>
                    Wealth management, retirement planning, and investment advice.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaLaptop 
                    size={50} 
                    style={iconStyle} 
                    className="service-icon"
                  />
                  <Card.Title style={{ color: "#043f71" }}>Online Banking</Card.Title>
                  <Card.Text style={{ color: "#043f71" }}>
                    Convenient and secure online banking services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <FaMobileAlt 
                    size={50} 
                    style={iconStyle} 
                    className="service-icon"
                  />
                  <Card.Title style={{ color: "#043f71" }}>Mobile Banking</Card.Title>
                  <Card.Text style={{ color: "#043f71" }}>
                    Access your accounts on the go with our mobile app.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-5 py-5 bg-light">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <img src={contactUs} alt="Contact Us" className="img-fluid" />
                    </Col>
                    <Col md={6}>
                      <h2 className="mb-4" style={{ color: "#043f71" }}>Contact Us</h2>
                      <p className="text-muted mb-4">Get in touch with us for any queries or support. We are here to help you.</p>
                      <Form>
                        <Form.Group controlId="formName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-2">
                          Submit
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
