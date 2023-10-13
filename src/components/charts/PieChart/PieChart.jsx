import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import "../chartStyles/chartStyles.scss";

export class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();

    this.state = {
      series: [32, 41, 53, 51],
      options: {
        labels: ["Emily Brown", "Michael Johnson", "Sarah Davis", "John Doe"],
        legend: {
          position: "top",
          markers: {
            fillColors: ["#a52a2a", "#d2691e", "#b8860b", "#00008b"]
          }
        }
      }
    };
  }


  render() {
    return (
      <div className="chart-container">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            height={'100%'}
            ref={this.chartRef}
            events={{
              zoomed: this.handleZoom
            }}
          />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<PieChart />, domContainer);
