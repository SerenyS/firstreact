import React, { Component } from 'react';

class newCountry extends Component {
  state = {  }
  handleClick = () => {
    const name = prompt(' Country Name:');
    if (name && name.trim().length > 0) {
      this.props.onAdd(name);
    }
  }
  render() { 
    return (
      <div >
        <button onClick={ this.handleClick }>Add Country</button>
      </div>
    );
  }
}

export default newCountry;