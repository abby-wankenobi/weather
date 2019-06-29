import React from 'react';
import ReactDOM from 'react-dom';

import Search from './search.js';


export default class Home extends React.Component {
  state = {
   payload: null,
  }

  stateHandler = (input) =>{
    this.setState({
      payload : input
    })
    console.log(this.state.payload)
  }

  render() {
    return (
      <div>
        <Search stateHandler={this.stateHandler}  />
      </div>
    )
  }
}
