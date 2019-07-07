import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    users: [],
    habits: []
  }

  fetchHabits = () => {
  fetch("http://localhost:3000/api/habits")
  .then(res => res.json())
  .then(data => {
    this.setState({
      habits: data,
      loading: false
    })
  })
}

componentDidMount(){
    this.fetchHabits()
  }

  render() {
    console.log(this.state.habits)
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!</p>
        <button>Switch Name</button>
      </div>
    );
  }

}
