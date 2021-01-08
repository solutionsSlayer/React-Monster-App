import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/seach.component.jsx";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    // bind this for no arrow functions
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    return this.setState({searchField: e.target.value})
  }

  render () {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder="Search Monsters!"
        handleChange={ this.handleChange }/>
      <CardList monsters={monstersFiltered}></CardList>
      </div>
    )

  };
}

export default App;
