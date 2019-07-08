import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './containers/NavBar'
import Profile from './containers/Profile'
import Habits from './containers/Habits'

export default class App extends React.Component {

  state = {
    users: [],
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => <div>This is your Home page</div>} />
          <Route path="/profile" component={Profile}/>
          <Route path="/habits" habits={this.state.habits} component={Habits}/>
        </div>
      </Router>
    );
  }

}
