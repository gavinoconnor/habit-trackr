import React from 'react'
import HabitCard from '../components/HabitCard';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Habits extends React.Component {

  render() {
    return (
      <div className="habits">
        <Jumbotron fluid>
          <h1>HabitTrackr encourages you to select 1-4 habits to start.</h1> <br />
          <p>
            <h3>Start small, think big, and add new habits whenever you like!</h3>
          </p>
        </Jumbotron>
          {this.props.habits ? (
            this.props.habits.map(habit => {
            return (
              <HabitCard key={habit.id} habit={habit}/>
            );
          })
        ) : (
          <h3>No habits found</h3>
        )}
      </div>
    )
  }
}
