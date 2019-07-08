import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HabitCard = props => {
  return (
    <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <Card bg="info" border="primary" text="white" style={{flex: 1}}>
          <Card.Img src="" alt=""/>
          <Card.Body>
            <Card.Title>{props.habit.name}</Card.Title>
            <Card.Text>
              Placeholder text about this specific habit.<br />
              <strong>Category: {props.habit.category}</strong>
            </Card.Text>
            <Button variant="primary">Add Habit</Button>
          </Card.Body>
        </Card>
    </CardDeck>
  )

}

export default HabitCard
