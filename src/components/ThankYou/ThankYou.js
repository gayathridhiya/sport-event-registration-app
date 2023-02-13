import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ThankYou.css';

class ThankYou extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="thank-you-jumbotron jumbotron">
              <h1 className="display-4 text-center">Thank You!</h1>
              <p className="lead text-center">Your submission has been received and is being processed.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ThankYou;
