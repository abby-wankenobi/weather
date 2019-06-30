import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div className="searchBar">
        <form action="/">
        <input className="cityInput" onChange={this.props.handleChange} type="text" name="city" value={this.props.location}/>
          <br/>
          <input className="weatherSubmit w-75" type="submit" onClick={this.props.handleSubmit} value="View Weather"/>
        </form>
      </div>
    )
  }
}
