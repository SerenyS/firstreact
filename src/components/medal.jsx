import React, { Component } from 'react';

class Medal extends Component {
  state = {  }
  render() { 
    const { medal, country, increase, decrease } = this.props;

    //For each medal you need a add and subtract this is going to passed into each country component as a "subcomponent"
    return (
      <div>

        { medal.name } Medals:  { country[medal.name]  }
        <button onClick={ () => increase(country.id, medal.name) }>+</button>
        <button disabled={ country[medal.name] === 0 } onClick={ () => decrease(country.id, medal.name) }>-</button>
      </div>
    );
  }
}

export default Medal;