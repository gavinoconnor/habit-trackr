import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {
  handleChange = (event) => {
    this.props.setFilter(event.target.value)
  }

  render(){
    return (
      <div className="search-container">
      <nav className="navbar navbar-light bg-light">
  <form className="form-inline mx-auto" onSubmit={this.handleSubmit} formname="search-form">
    <input className="form-control mr-sm-2" type="search" placeholder="Search Habits" aria-label="Search"
      name="searchTerm"
      value={this.props.searchTerm}
      onChange={this.handleChange}
      inputname="input"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    </nav>
      </div>
    )
  }
}

export default SearchBar
