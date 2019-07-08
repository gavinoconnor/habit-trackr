import React from 'react'
import HabitCard from '../components/HabitCard'

export default class Habits extends React.Component {

  state= {
    habits: []
  }

fetchHabits = () => {
fetch("http://localhost:3000/api/habits")
.then(res => res.json())
.then(data => {
  this.setState({
    habits: data,
    loading: false
  })
})
}

componentDidMount(){
  this.fetchHabits()
}

  render() {
    console.log(this.state.habits)
    return (
      <div>
        {this.state.habits.map(habit => {
          return <HabitCard key={habit.id} habit={habit}/>
        })}
      </div>
    )
  }
}
