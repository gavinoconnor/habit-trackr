import React from 'react'
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {

  render(){
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/">HabitTrackr</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" style={{ color: '#CCC' }}>Home</Link>&nbsp;&nbsp;
            <Link to="profile" style={{ color: '#CCC' }}>Profile</Link>&nbsp;&nbsp;
            <Link to="habits" style={{ color: '#CCC' }}>Habits</Link>
          </Nav>
          <Nav className="ml-auto">
              <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;
              <Link to="/login">Log In</Link>&nbsp;&nbsp;
              <Link to="/login">Log Out</Link>&nbsp;&nbsp;
          </Nav>
      </Navbar>
  );
  }
}

export default NavBar
