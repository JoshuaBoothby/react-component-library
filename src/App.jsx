import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="#home" className="ms-3">
          BigNav
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ padding: "2rem", maxWidth: 400, margin: "auto" }}>
        <Card>
          <Card.Header as="h5">Cool Card or Cruel Card?</Card.Header>
          <Card.Body>
            <Card.Title className="text-center">You Decide!</Card.Title>
            <Card.Text>Press a Button to determine your fate.</Card.Text>
            <Button variant="primary" className="me-2">
              The Cool Button
            </Button>
            <Button variant="success" className="ms-2">
              The Cruel Button
            </Button>
            {/*Used the green button because it reminds me of the necromancy
            effects in BG3*/}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
