import React from "react";
import ReactApexChart from "react-apexcharts";

export class BarStacked extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
          position: 'top',
        }
      },
      series: [
        {
          name: 'Дані 1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        },
        {
          name: 'Дані 2',
          data: [20, 35, 42, 35, 50, 60, 80, 100, 120]
        },
        {
          name: 'Дані 3',
          data: [10, 20, 25, 30, 29, 30, 35, 45, 60]
        }
      ]
    };
  }

  render() {
    return (
      <div className="chart-container">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={600}
            width={1000}
          />
        </div>
      </div>
    );
  }
}
