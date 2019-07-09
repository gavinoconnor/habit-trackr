import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './containers/NavBar'
import ProfilePage from './containers/ProfilePage'
import Habits from './containers/Habits'
import LoginForm from './components/LoginForm'
import SignUpForm from './containers/SignUpForm'
import Image from 'react-bootstrap/Image'

import Jumbotron from 'react-bootstrap/Jumbotron'

export default class App extends React.Component {

  state = {
    user: null,
    isSignedIn: true,
    habits: [],
    userHabits: [],
    searchTerm: ""
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
        user: user,
        userHabits: user.habits
      })
    })
  }

  componentDidMount() {
    this.fetchHabits();
    this.fetchUser();
  }

  setSignIn = isSignedIn => this.setState({ isSignedIn });

  setFilter = (newTerm) => {
    this.setState({
      searchTerm: newTerm
    })
  }
  applyFilter = () => {
   return this.state.habits.filter(habit => {
     return habit.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
   })
 }

 findUser = () => {

 }

 handleClick = (habitObj) => {
   console.log("click", habitObj)
   debugger
   if(!this.state.habits.find(habit => habit.id === habitObj.id)) {
     let addUserHabits = [...this.state.userHabits, habitObj]
     this.setState ({
       userHabits: addUserHabits
     })
   }
   this.fetchUserHabits(habitObj);
 }

 fetchUserHabits = (habitObj) => {
   const data = {
     user_id: this.state.user.id,
     habit_id: habitObj.id
   }
   console.log("fetch data", data)
   fetch("http://localhost:3000/api/user_habits", {
     method: "POST",
       headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
 }


  render() {
    console.log("in app, state: ", this.state)
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
            <h1>Welcome to HabitTrackr</h1>
              <p>
                Our goal is to help you keep up with <em>your</em> goals<br />
                by highlighting the achievements most important to you.<br />
              </p>
              <Image src="./maxresdefault.jpg" fluid />
          </Jumbotron>
        </div>} />
            {this.state.isSignedIn ? <Route path="/profile" render={() => <ProfilePage userHabits={this.state.userHabits} user={this.state.user}/>}/> : <Route path="/signup" render={() => <SignUpForm />}/>}
            <Route path="/habits" render={() => <Habits handleClick={this.handleClick} searchTerm={this.state.searchTerm} setFilter={this.setFilter} habits={this.applyFilter()}/>}/>
            <Route path="/signup" render={() => <SignUpForm />}/>
          </Switch>
        </div>
      </Router>
    );
  }

}
