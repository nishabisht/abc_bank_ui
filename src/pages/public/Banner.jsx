import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="overlay">
        <Container className="text-center">
          <button  className="m-2 btn-first">Contact Us</button>
          <button  className="m-2 btn-second">Login</button>
        </Container>
      </div>
    </section>
  );
};

export default Banner;