import React from 'react'
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component {

  state = {
    email: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors) {
				alert(response.errors)
			} else {
				// response is the user object
				// console.log(response)
				localStorage.setItem("token", response.token)
				this.props.setCurrentUser(response.user)
				this.props.history.push(`/users/${response.user.id}`)
			}
		})
	}

    render(){

      const style = {
        paddingTop: '20px'
      }

      return (
        <div className="container" style={style}>
          <div className="login">
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" name="email" value={this.state.email}  placeholder="Enter Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password" />
              </Form.Group>

              <Button type="submit" href="profile">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )
    }
}

    export default LoginForm
