import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css"; // Ensure this path is correct

const Profile = () => {
  // Sample user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
  };

  // State to manage form visibility
  const [isEditing, setIsEditing] = useState(false);

  // State to handle image upload
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  // Handle the image upload and set the preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle the edit form visibility
  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                  <h3>{userData.name}</h3>
                  <p>{userData.bio}</p>
                </Col>
                <Col md={8}>
                  <h4>Contact Information</h4>
                  <p><strong>Email:</strong> {userData.email}</p>
                  <p><strong>Phone:</strong> {userData.phone}</p>
                  <p><strong>Address:</strong> {userData.address}</p>
                  <Button variant="primary" className="mt-3" onClick={toggleEditForm}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Conditionally render the form based on the isEditing state */}
      {isEditing && (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4>Edit Profile</h4>
                <Form>
                  {/* Profile Picture Upload */}
                  <Form.Group controlId="formProfilePic" className="text-center">
                    <Form.Label>Profile Picture</Form.Label>
                    <div className="mb-3">
                      <img
                        src={profileImage}
                        alt="Profile Preview"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                      />
                    </div>
                    <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
                  </Form.Group>

                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      defaultValue={userData.name}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      defaultValue={userData.email}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                      defaultValue={userData.phone}
                    />
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      defaultValue={userData.address}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your bio"
                      defaultValue={userData.bio}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
