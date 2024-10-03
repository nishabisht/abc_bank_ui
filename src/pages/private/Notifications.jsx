import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/styles.css'; // Ensure this path is correct

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'New Message',
      message: 'You have received a new message from John Doe.',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Account Update',
      message: 'Your account information has been updated successfully.',
      time: '1 day ago'
    },
    {
      id: 3,
      title: 'Security Alert',
      message: 'A new login from an unknown device was detected.',
      time: '3 days ago'
    }
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="mb-3" style={{ color: "#043f71" }}>Notifications</h1>
          <p className="text-muted">
            Stay updated with the latest account and security alerts.
          </p>
        </Col>
      </Row>
      <Row>
        {notifications.map(notification => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={notification.id}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title style={{ color: "#043f71" }}>{notification.title}</Card.Title>
                <Card.Text className="text-muted">{notification.message}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted text-end">{notification.time}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notifications;
