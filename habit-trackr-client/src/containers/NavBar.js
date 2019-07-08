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
            <Link to="/" style={{ color: '#FFF' }}>Home</Link>
            <Link to="profile" style={{ color: '#FFF' }}>Profile</Link>
            <Link to="habits" style={{ color: '#FFF' }}>Habits</Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="outline-light">Sign Up</Button>
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

// {isSignedIn ? (
//         <button onClick={() => setSignIn(false)}>Sign out</button>
//       ) : (
//           <button onClick={() => setSignIn(true)}>Sign In</button>
//         )}
