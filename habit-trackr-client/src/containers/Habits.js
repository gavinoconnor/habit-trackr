import React from 'react'
import HabitCard from '../components/HabitCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SearchBar from '../components/SearchBar'

export default class Habits extends React.Component {

  state ={
    sortHabit: ""
  }

  render() {
    return (
      <div className="habits">
        <Jumbotron fluid>
          <h1>HabitTrackr encourages you to select 1-4 habits to start.</h1> <br />
            <h3>Start small, think big, and add new habits whenever you like!</h3>

        </Jumbotron>
      <SearchBar setFilter={this.props.setFilter} searchTerm={this.props.searchTerm}/>
          {this.props.habits ? (
            this.props.habits.map(habit => {
            return (
              <HabitCard key={habit.id} habit={habit} handleClick={this.props.handleClick}/>
            );
          })
        ) : (
          <h3>No habits found</h3>
        )}
      </div>
    )
  }
}
