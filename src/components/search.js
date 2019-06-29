import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div>
        <form action="/">
          Enter location<br/><br/>
        <input onChange={this.props.handleChange} type="text" name="firstname" value={this.props.location}/>
          <br/>
          <input type="submit" onClick={this.props.handleSubmit} value="Submit"/>
        </form>
      </div>
    )
  }
}
