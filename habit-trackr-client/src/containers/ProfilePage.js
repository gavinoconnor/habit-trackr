import React from 'react'
import ProfileCard from '../components/ProfileCard'
import HabitCard from '../components/HabitCard'

export default class ProfilePage extends React.Component {

  render() {
    console.log(this.props)

    return (
      <div className="profile">
        {this.props.user ? (
            <ProfileCard user={this.props.user}/>
        ) : (
          <h3>Nope</h3>
        )}
        <div className="habit-container">
          {this.props.userHabits.map(habit => {
            return <HabitCard key={habit.id} habit={habit}/>
          })}
        </div>
      </div>
    )
  }
}
