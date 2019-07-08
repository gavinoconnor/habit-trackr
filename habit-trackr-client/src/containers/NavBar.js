import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {

  render(){
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">HabitTrackr</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="habits">Habits</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="outline-light">Sign Up</Button>
            <Button variant="outline-light">Log In</Button>
          </Nav>
      </Navbar>
  );
  }
}

export default NavBar
