import React from 'react'

import {Form, Button} from 'react-bootstrap';


class LoginForm extends React.Component {


    state = {
        username: "",
        password: "",
    }



    handleChange = (event) => {
        console.log(event.target);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="login">
            <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control onChange={this.handleChange} type="username" name="username" value={this.state.username}  placeholder="Enter Username" />
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
        )
    }
}

    export default LoginForm
