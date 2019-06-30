import React, { Component } from 'react';

class Bar extends Component {
    componentDidMount() {
      console.log(this.props)

    }

    handleStyling = () => {
      return ({ height: this.props.styling})
    }


    render() {
      return (

        <li>
          <span title={this.props.time}></span>

        </li>

      )
    }
}
export default Bar
