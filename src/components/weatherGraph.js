import React, { Component } from 'react';

class BarChart extends Component {
    componentDidMount() {
      // console.log(this.props)
    }


    render() {
      var style1 = {height: "5%"}

      return (

        <div className="graphContainer">
          <div className="graph">
            <ul class="chart">
              <li>
                <span style={style1} title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
              <li>
                <span style={style1} title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
              <li>
                <span title="14:00"></span>
              </li>
            </ul>
          </div>
        </div>

      )
    }
}
export default BarChart
