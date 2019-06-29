import React from 'react';
import ReactDOM from 'react-dom';

import Search from './search.js';
import Weather from './weather.js';
import { apiCall } from './apiCall.js';


export default class Home extends React.Component {
  state = {
    location: "New York",
    data: {},
  }

  handleChange = (e) =>{
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit = e =>{
    var location = this.state.location
    e.preventDefault()


    if(!parseInt(location) == !NaN){
      location = "q=" + location
    }
    else{
      location = "zip=" + location
    }
    var input = apiCall(location, this.handleData)

  }

  handleData = (arg) => {
    this.setState({
      data: arg,
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Weather />
      </div>
    )
  }
}
