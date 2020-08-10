import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const addScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Monster Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group>
              <Button variant="primary">Add</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default addScreen;
