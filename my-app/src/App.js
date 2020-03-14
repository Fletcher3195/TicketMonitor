import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><i id="logo">ticketmonitor</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/Fletcher3195/TicketMonitor">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col>
          this is a col
        </Col>
        
      </Row>
    </Container>
  );
}

export default App;
