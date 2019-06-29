import React from 'react';
import ReactDOM from 'react-dom';
import { apiCall } from './apiCall.js';
import { parseLocation } from './parseLocation.js';

export default class Search extends React.Component {
  state = {
    location: "New York",
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
    var input = apiCall(location)
    debugger;
    this.props.stateHandler(input)

  }





  render() {
    return (
      <div>
        <form action="/action_page.php">
          Enter location<br/><br/>
        <input onChange={this.handleChange} type="text" name="firstname" value={this.state.location}/>
          <br/>
          <input class="submitSearch" type="submit" onClick={this.handleSubmit} value="Submit"/>
        </form>
      </div>
    )
  }
}
