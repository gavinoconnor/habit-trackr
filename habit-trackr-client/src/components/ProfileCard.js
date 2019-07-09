import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'

const ProfileCard = props => {
  return (
    <CardDeck style={{display: 'inline-flex', flexDirection: 'row'}}>
      <Jumbotron fluid>
        <Card bg="info" border="primary" text="white" style={{flex: 1}}>
          <Card.Img src="" alt=""/>
          <Card.Body>
            <Card.Title>{props.user.username}</Card.Title>
            <Card.Text>
              Placeholder text about this specific user.<br />
            </Card.Text>
            <Button variant="primary">View {props.user.first_name}'s Profile</Button>
          </Card.Body>
        </Card>
        </Jumbotron>
    </CardDeck>
  )

}

export default ProfileCard
