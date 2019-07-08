import React from 'react'
import HabitCard from '../components/HabitCard'

export default class Habits extends React.Component {

  render() {
    return (
      <div className="habits">
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
