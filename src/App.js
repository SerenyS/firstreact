
import './App.css';
import React, { Component } from 'react';
import Country from './components/country'; 
//import countries from'./countries.json';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'Venezuela', gold: 5 },
      { id: 2, name: 'Korea', gold: 8 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }
  render() { 
    return (
      <React.Fragment>
        { this.state.countries.map(country => 
          <Country key={ country.id } country={ country } />
        )}
      </React.Fragment>
    );
  }
}
 
export default App;


