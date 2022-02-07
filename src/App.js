import Typography from '@mui/material/Typography';
import './App.css';
import React, { Component } from 'react';
import Country from './components/country'; 
//import countries from'./countries.json';
import NewCountry from './components/newCountry';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'Venezuela', Gold: 5 ,Silver:5, Bronze:1,},
      { id: 2, name: 'Korea', Gold: 8 ,Silver:5, Bronze:1,},
      { id: 3, name: 'Germany', Gold: 0 ,Silver:5, Bronze:1,},
    ],
    medals: [
      { id: 1, name: 'Gold' },
      { id: 2, name: 'Silver' },
      { id: 3, name: 'Bronze' },
    ]
  }

  handleIncrease = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] += 1;
    this.setState({ countries: countries });
  }
  handleDecrease = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] -= 1;
    this.setState({ countries: countries });
  }

  handleDelete = (countryId) => {
    const { countries } = this.state;
    const mutableCountries = [...countries].filter(c => c.id !== countryId);
    this.setState({ countries: mutableCountries });
  }

  handleAdd = (name) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = [...countries].concat({ id: id, name: name, Gold: 0, Silver: 0, Bronze: 0 });
    this.setState({ countries: mutableCountries });
  }
  AllMedalsTotal() {
    let allMedals= 0;
    this.state.medals.forEach(medal => { allMedals+= this.state.countries.reduce((a, b) => a + b[medal.name], 0); });
    return allMedals;
  }



  render() { 
    return (
      <React.Fragment>
        <Typography>
         <h1>Olympic Medals</h1> 
        </Typography>
        <span>Total Medals:{this.AllMedalsTotal()}</span>
        <div>
        { this.state.countries.map(country => 
              <Country 
                key={ country.id } 
                country={ country } 
                medals={ this.state.medals }
                increase={ this.handleIncrease} 
                decrease={ this.handleDecrease }
                deleteCountry = {this.handleDelete} />
            )}
     </div>
     <NewCountry onAdd={ this.handleAdd } />
    
      </React.Fragment>
    );
  }
}
 
export default App;


