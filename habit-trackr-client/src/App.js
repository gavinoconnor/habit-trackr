import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './containers/NavBar'
import ProfilePage from './containers/ProfilePage'
import Habits from './containers/Habits'
import LoginForm from './components/LoginForm'
import SignUpForm from './containers/SignUpForm'

import Jumbotron from 'react-bootstrap/Jumbotron'

export default class App extends React.Component {

  state = {
    user: null,
    isSignedIn: true,
    habits: []
  }

  fetchHabits = () => {
  fetch("http://localhost:3000/api/habits")
    .then(res => res.json())
    .then(data => {
      this.setState({
        habits: data,
      })
    })
  }

  fetchUser = () => {
    fetch("http://localhost:3000/api/users/1")
    .then(res => res.json())
    .then(user => {
      this.setState({
        user: user
      })
    })
  }

  componentDidMount() {
    this.fetchHabits();
    this.fetchUser();
  }

  setSignIn = isSignedIn => this.setState({ isSignedIn });

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar
            isSignedIn={this.state.isSignedIn}
            setSignIn={this.setSignIn}
            />
          <Switch>
          <Route exact path="/" render={() => <div>
            <Jumbotron fluid>
            <h1>This is your home page</h1>
              <p>
                More information and styling to come.
              </p>
          </Jumbotron>
        </div>} />
          {this.state.isSignedIn ? <Route path="/profile" render={() => <ProfilePage user={this.state.user}/>}/> : <Route path="/signup" render={() => <SignUpForm />}/>}
          <Route path="/habits" render={() => <Habits habits={this.state.habits}/>}/>
          <Route path="/signup" render={() => <SignUpForm />}/>
        </Switch>
        </div>
      </Router>
    );
  }

}
