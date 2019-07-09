import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {



  render(){
    console.log(this.props.isSignedIn)
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand to="/">HabitTrackr</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" style={{ color: '#CCC' }}>Home</Link>&nbsp;&nbsp;
            <Link to="profile" style={{ color: '#CCC' }}>Profile</Link>&nbsp;&nbsp;
            <Link to="habits" style={{ color: '#CCC' }}>Habits</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/signup"><Button variant="outline-light" href="/signup">Sign Up</Button></Link>
            {this.props.isSignedIn ? (
              <Button variant="outline-light" onClick={() => this.props.setSignIn(false)}>Log Out</Button>
            ) : (
              <Button variant="outline-light" onClick={() => this.props.setSignIn(true)}>Log In</Button>
            )}
          </Nav>
      </Navbar>
  );
  }
}

export default NavBar
