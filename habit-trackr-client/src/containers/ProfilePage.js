import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default class ProfilePage extends React.Component {

  render() {
    console.log(this.props.user)

    return (
      <div className="profile">
        {this.props.user ? (
            <ProfileCard user={this.props.user}/>
        ) : (
          <h3>Nope</h3>
        )}
      </div>
    )
  }
}
