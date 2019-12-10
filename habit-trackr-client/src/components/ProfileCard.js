import React from 'react';

const ProfileCard = props => {
  return (
    <div className="container">
      <h1>
        Welcome, {props.user.first_name}!
      </h1>
      <p>Here are your current habits:</p>
    </div>
  )
}

export default ProfileCard
