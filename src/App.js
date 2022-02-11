// import Typography from '@mui/material/Typography';
// import './App.css';
// //import React, { Component } from 'react';
// import React, { useState, useEffect, useRef } from 'react';
// import Country from './components/country'; 
// //import countries from'./countries.json';
// import NewCountry from './components/newCountry';

import React, { useState, useEffect, useRef } from 'react';
import Country from './components/country';
import NewCountry from './components/newCountry';
import './App.css';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const medals = useRef([
    { id: 1, name: 'gold' },
    { id: 2, name: 'silver' },
    { id: 3, name: 'bronze' },
  ]);

  // this is the functional equivalent to componentDidMount
  useEffect(() => {
    // initial data loaded here
    let fetchedCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
    ]
    setCountries(fetchedCountries);
  }, []);

  const handleAdd = (name) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    setCountries([...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 }));
  }
  const handleDelete = (countryId) => {
    setCountries([...countries].filter(c => c.id !== countryId));
  }
  const handleIncrement = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  const handleDecrement = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);
  }
  const getAllMedalsTotal = () => {
    let sum = 0;
    medals.current.forEach(medal => { sum += countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }
  return (
    <React.Fragment>
      <div className='appHeading'>
        Olympic Medals
        <span className='badge'>
          { getAllMedalsTotal() }
        </span>
      </div>
      <div className='countries'>
          { countries.map(country => 
            <Country 
              key={ country.id } 
              country={ country } 
              medals={ medals.current }
              onDelete={ handleDelete }
              onIncrement={ handleIncrement } 
              onDecrement={ handleDecrement } />
          )}
      </div>
      <NewCountry onAdd={ handleAdd } />
    </React.Fragment>
  );
}
 
export default App;
// class App extends Component {
//   state = {
//     countries: [
//       { id: 1, name: 'Venezuela', Gold: 5 ,Silver:5, Bronze:1,},
//       { id: 2, name: 'Korea', Gold: 8 ,Silver:5, Bronze:1,},
//       { id: 3, name: 'Germany', Gold: 0 ,Silver:5, Bronze:1,},
//     ],
//     medals: [
//       { id: 1, name: 'Gold' },
//       { id: 2, name: 'Silver' },
//       { id: 3, name: 'Bronze' },
//     ]
//   }

//   handleIncrease = (countryId, medalName) => {
//     const countries = [ ...this.state.countries ];
//     const idx = countries.findIndex(c => c.id === countryId);
//     countries[idx][medalName] += 1;
//     this.setState({ countries: countries });
//   }
//   handleDecrease = (countryId, medalName) => {
//     const countries = [ ...this.state.countries ];
//     const idx = countries.findIndex(c => c.id === countryId);
//     countries[idx][medalName] -= 1;
//     this.setState({ countries: countries });
//   }

//   deleteCountry = (countryId) => {
//     const { countries } = this.state;
//     const mutableCountries = [...countries].filter(c => c.id !== countryId);
//     this.setState({ countries: mutableCountries });
//   }

//   handleAdd = (name) => {
//     const { countries } = this.state;
//     const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
//     const mutableCountries = [...countries].concat({ id: id, name: name, Gold: 0, Silver: 0, Bronze: 0 });
//     this.setState({ countries: mutableCountries });
//   }
//   totalMedals() {
//     let allMedals= 0;
//     this.state.medals.forEach(medal => { allMedals+= this.state.countries.reduce((a, b) => a + b[medal.name], 0); });
//     return allMedals;
//   }



//   render() { 
//     return (
//       <React.Fragment>
//         <Typography>
//          <h1>Olympic Medals</h1> 
//         </Typography>
//         <span>Total Medals:{this.totalMedals()}</span>
//         <div>
//         { this.state.countries.map(country => 
//               <Country 
//                 key={ country.id } 
//                 country={ country } 
//                 medals={ this.state.medals }
//                 increase={ this.handleIncrease} 
//                 decrease={ this.handleDecrease }
//                 deleteCountry = {this.deleteCountry} />
//             )}
//      </div>
//      <NewCountry onAdd={ this.handleAdd } />
    
//       </React.Fragment>
//     );
//   }
// }
 
//export default App;


