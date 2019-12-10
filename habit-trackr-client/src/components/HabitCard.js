import React from 'react';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const HabitCard = props => {
  return (
      // <Col sm={3}>
          <Card style={{display: 'flex'}}>
            <Card.Img src={props.habit.img} alt=""/>
            <Card.Body>
              <Card.Title>{props.habit.name}</Card.Title>
              <Card.Text>
                Placeholder text about this specific habit.<br />
                <strong>Category: {props.habit.category}</strong>
              </Card.Text>
              <Button onClick={() => props.handleClick(props.habit)} variant="primary">Add Habit</Button>
            </Card.Body>
          </Card>
      // </Col>
  )

}

export default HabitCard
