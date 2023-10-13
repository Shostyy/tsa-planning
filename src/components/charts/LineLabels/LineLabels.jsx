import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import "../chartStyles/chartStyles.scss";

export class LineLabels extends React.Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();

    this.state = {
      series: [
        {
          name: "Дані 1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        },
        {
          name: "Дані 2",
          data: [20, 35, 42, 35, 50, 60, 80, 100, 120]
        }
      ],
      options: {
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        },
        chart: {
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        legend: {
          position: "top",
          markers: {
            fillColors: ["#a52a2a", "#d2691e", "#b8860b", "#00008b"]
          }
        },
        stroke: {
          width: [3, 3, 3, 3],
          colors: ["#a52a2a", "#d2691e", "#b8860b", "#00008b"],
          dashArray: [0, 5, 0, 5]
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          }
        }
      }
    };
  }

  handleResetScope = () => {
    if (this.chartRef.current) {
      this.chartRef.current.chart.zoomX(0, 1);
    }
  };

  render() {
    return (
      <div className="chart-container">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={'100%'}
            ref={this.chartRef}
            events={{
              zoomed: this.handleZoom
            }}
          />
          <button onClick={this.handleResetScope}>Reset Scope</button>
        </div>
      </div>
    );
  }
}