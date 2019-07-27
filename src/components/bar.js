import React, { Component } from 'react';


class Bar extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  handleTemp = (temp) => {
    return Math.round((temp - 273.15) * 9/5 + 32);
  }


  render() {

    var styles = {
      height: `${Math.round((this.props.temp - 273.15) * 9/5 + 32)}%`
    }

    return (
      <li>

        <span style={styles}
          className={"mobileBar " + (this.props.rain ? 'rain' : 'noRain')} title={this.props.hour}>
        </span>
        <span className="degrees">{this.handleTemp(this.props.temp)}<sup className="sup">&deg;</sup>
        </span>



      </li>

    )
  }
}
export default Bar
