import React from 'react';

export default class Weather extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.location.location}</h1>
      </div>
    )
  }
}
