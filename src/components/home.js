import React from 'react';

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


  // Sends proper text to API call depending if input is a city name or zip code
  handleSubmit = e =>{
    var location = this.state.location
    e.preventDefault()

    if(!parseInt(location) === !NaN){
      location = "q=" + location
    }
    else{
      location = "zip=" + location
    }
    var input = apiCall(location, this.handleData)
  }


  // Sets data in state to chosen city information
  handleData = (arg) => {
    this.setState({
      data: arg,
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Search location={this.state.location} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Weather location={this.state} />
      </div>
    )
  }
}
