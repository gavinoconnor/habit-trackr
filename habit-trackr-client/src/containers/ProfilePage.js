import React from 'react'
import ProfileCard from '../components/ProfileCard'
import HabitCard from '../components/HabitCard'

class ProfilePage extends React.Component {

  render() {
    const style = {
      paddingTop: '20px'
    }
    console.log("Profile page:", this.props.user)
    if(!this.props.user) {
      return <div>"Loading..."</div>
    }
    return (
      <div className="profile" style={style}>
        {this.props.user ? (
            <ProfileCard user={this.props.user}/>
        ) : (
          <h3>Nope</h3>
        )}
        <div className="habit-container">
          {this.props.user.habits.map(habit => {
            return <HabitCard key={habit.id} habit={habit}/>
          })}
        </div>
      </div>
    )
  }
}

export default ProfilePage;
