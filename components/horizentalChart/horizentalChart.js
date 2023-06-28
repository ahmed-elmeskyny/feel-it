import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        family: "Rubik",
        size: 20,
      },
    },
    title: {
      display: true,
      text: "Horizontal Bar Count",
    },
    scales: {
      x: {
        display: false,
      },

      y: {
        display: false,
      },
    },
  },
};

const HorizontalChart = ({ dataT }) => {
  const labels = ["Positive", "Negative", "Neutral"];
  const data = {
    labels,
    datasets: [
      {
        data: dataT,
        backgroundColor: ["#009245", "rgb(254, 46, 96)", "rgb(254, 190, 22)"],
        borderWidth: 1,
        barThickness: 15,
        borderRadius: 10,
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalChart;
