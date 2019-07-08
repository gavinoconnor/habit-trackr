import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default class Profiles extends React.Component {

  render() {
    return (
      <div className="profiles">
          {this.props.users ? (
            this.props.users.map(user => {
            return (
              <ProfileCard key={user.id} user={user}/>
            );
          })
        ) : (
          <h3>No profiles found</h3>
        )}
      </div>
    )
  }
}
