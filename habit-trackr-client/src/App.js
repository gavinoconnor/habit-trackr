import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Import components
import NavBar from './containers/NavBar';
import ProfilePage from './containers/ProfilePage';
import Habits from './containers/Habits';
import LoginForm from './components/LoginForm';
import SignUpForm from './containers/SignUpForm';

//Import Bootstrap elements
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class App extends React.Component {

  state = {
    allUsers: [],
    currentUser: null,
    habits: [],
    userHabits: [],
    searchTerm: "",
    sortType: "none"
  }

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  logout = () => {
    this.setState({currentUser: null})
    localStorage.removeItem("token")
    this.props.history.push("/login")
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
    fetch("http://localhost:3000/api/users/1")
    .then(res => res.json())
    .then(users => {
      // console.log("Fetch: ", users)
      this.setState({
        currentUser: users
      })
    })
  }

  componentDidMount() {
    this.fetchHabits();
    this.fetchUsers();
    // const token = localStorage.getItem('token')
    // if (token) {
    //   fetch('http://localhost:3000/auto_login', {
    //     headers: {
    //       "Authorization": token
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(response => {
    //     if (response.errors){
    //       localStorage.removeItem("user_id")
    //       alert(response.errors)
    //     } else {
    //       console.log("Component: ", response)
    //       this.setState({
    //         currentUser: response,
    //         loading: false,
    //       })
    //     }
    //   })
    // };
  }

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

 handleClick = (habitObj) => {
   if(!this.state.habits.find(habit => habit.id === habitObj.id)) {
     let addUserHabits = [...this.state.userHabits, habitObj]
     this.setState ({
       userHabits: addUserHabits
     })
   }
   console.log("Habit click: ", this.state.currentUser)
   this.fetchUserHabits(habitObj);
 }

 fetchUserHabits = (habitObj) => {
   const data = {
     user_id: this.state.currentUser.id,
     habit_id: habitObj.id
   }
   fetch("http://localhost:3000/api/user_habits", {
     method: "POST",
       headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify(data)
      })
      // this.setState({
      //   userHabits.push(habitObj)
      // })
 }

  render() {
    if (!this.state.currentUser) {
      return <div>"Loading..."</div>
    }
    return (
      <Router>
        <div className="App">

          <NavBar
            user={this.currentUser}
            logout={this.logout}
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

          <Route
            path="/profile"
            render={() => <ProfilePage
            userHabits={this.state.userHabits}
            user={this.state.currentUser}/>}
          />

          <Route
            path="/habits"
            render={() => <Habits
            handleClick={this.handleClick}
            searchTerm={this.state.searchTerm}
            setFilter={this.setFilter}
            user={this.state.currentUser}
            habits={this.applyFilter()}/>}
          />

          <Route
            path="/signup"
            setCurrentUser={this.state.setCurrentUser}
            render={() => <SignUpForm />}
          />

          <Route
            path="/login"
            setCurrentUser={this.state.setCurrentUser}
            render={() => <LoginForm />}
          />

          </Switch>

        </div>
      </Router>
    );
  }

}
export default App;
