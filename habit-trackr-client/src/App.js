import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './containers/NavBar'
import Profiles from './containers/Profiles'
import Habits from './containers/Habits'

export default class App extends React.Component {

  state= {
    users: [],
    currentUser: null,
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

  fetchUsers = () => {
    fetch("http://localhost:3000/api/users/")
    .then(res => res.json())
    .then(users => {
      this.setState({
        users: users
      })
    })
  }

  componentDidMount() {
    this.fetchHabits();
    this.fetchUsers();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" render={() => <div>This is your Home page</div>} />
          <Route path="/profiles" render={() => <Profiles users={this.state.users}/>}/>
          <Route path="/habits" render={() => <Habits habits={this.state.habits}/>}/>
        </div>
      </Router>
    );
  }

}
