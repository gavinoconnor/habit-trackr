import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SignUpForm extends React.Component {
  state = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	}

  handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  createUser = () => {
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				localStorage.setItem("token", response.token)
				this.props.setCurrentUser(response.user)
				this.props.history.push(`/users/${response.user.id}`)
			}
		})
	}

  handleSubmit = () => {
    if(this.state.password) {
      this.createUser()
    } else {
      alert("Please enter a valid password")
    }
}

  render() {
    const style = {
      paddingTop: '20px'
    }

    return (
      <div className="container" style={style}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={this.state.firstName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={this.state.lastName} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="email"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password} />
            </Form.Group>
          </Form.Row>
          <Button type="submit" href="profile">
            Submit
          </Button>
        </Form>
      </div>
    );
  };

  }

export default SignUpForm;
