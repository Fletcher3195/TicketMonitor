import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

// Images
import logo from './resources/svg/logo.svg';

function App() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src={logo}
        width="200"
        // height="30"
        className="d-inline-block align-top"
        alt="ticketmonitor"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/Fletcher3195/TicketMonitor">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <br/>
      </Row>

      <Row>
        <Col lg="2">
          {/* TODO: Implement location box */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="City or Zipcode"
              aria-label="City or Zipcode"
              aria-describedby="location"
            />
            <InputGroup.Append>
              <InputGroup.Text id="location"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="currentColor" fill-rule="nonzero" d="M12.373 23.833a.5.5 0 0 1-.746 0C5.883 17.413 3 12.495 3 9c0-5.276 3.724-9 9-9s9 3.724 9 9c0 3.495-2.883 8.414-8.627 14.833zM20 9c0-4.724-3.276-8-8-8S4 4.276 4 9c0 3.1 2.66 7.707 8 13.748C17.34 16.708 20 12.1 20 9zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></g></svg></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>

        <Col lg="2">
          {/* TODO: Implement real dropdown menu for dates */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="All Dates"
              aria-label="All Dates"
              aria-describedby="dates"
            />
            <InputGroup.Append>
              <InputGroup.Text id="dates">v</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>

        <Col lg="6">
          {/* TODO: Implement search input and button */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for artists, venues, and events"
              aria-label="Search for artists, venues, and events"
              aria-describedby="searchText"
            />
            <InputGroup.Append>
              <InputGroup.Text id="searchText">search</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
