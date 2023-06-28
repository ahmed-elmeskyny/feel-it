import React from "react";
import styles from "./pirChart.module.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      // maxWidth: 50,
    },
    title: {
      display: true,
      text: " Doughnut Chart",
    },
  },
};
const PieChart = ({ dataT }) => {
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "# of Votes",
        data: dataT,
        backgroundColor: ["#009245", "rgb(254, 46, 96)", "rgb(254, 190, 22)"],
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut data={data} options={options} className={styles.dou} />;
};

export default PieChart;
