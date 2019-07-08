import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default class Profiles extends React.Component {

  render() {
    return (
      <div className="profiles">
          {this.props.profiles ? (
            this.props.profiles.map(profile => {
            return (
              <ProfileCard key={profile.id} profile={profile}/>
            );
          })
        ) : (
          <h3>No profiles found</h3>
        )}
      </div>
    )
  }
}
