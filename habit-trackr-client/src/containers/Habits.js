import React from 'react'
import HabitCard from '../components/HabitCard';

import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import SearchBar from '../components/SearchBar'

export default class Habits extends React.Component {

  state ={
    sortedHabits: []
  }

  handleChange = (event) => {
  this.setState({
    sortedHabits: {...this.props.habits, [event.target.name]: event.target.value}
  })
}

  render() {
    return (
      <div className="habits">
        <Jumbotron fluid>
          <h1>HabitTrackr encourages you to select 1-4 habits to start.</h1> <br />
            <h3>Start small, think big, and add new habits whenever you like!</h3>
        </Jumbotron>
      <SearchBar setFilter={this.props.setFilter} searchTerm={this.props.searchTerm}/>
      <DropdownButton id="dropdown-basic-button" title="Sort Habits">
        <Dropdown.Item onChange={this.handleChange}>Alphabetically</Dropdown.Item>
        <Dropdown.Item onChange={this.handleChange}>By Category</Dropdown.Item>
      </DropdownButton>
          {this.props.habits ? (
            this.props.habits.map(habit => {
            return (
              <Container fluid>
                <Row>
                  <Col sm={6}>
                  <HabitCard key={habit.id} habit={habit} handleClick={this.props.handleClick}/>
                  </Col>
                </Row>
              </Container>
            );
          })
        ) : (
          <h3>No habits found</h3>
        )}
      </div>
    )
  }
}
