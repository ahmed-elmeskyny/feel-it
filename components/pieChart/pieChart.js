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

const data = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      label: "# of Votes",
      data: [19865, 3875, 11040],
      backgroundColor: ["#009245", "rgb(254, 46, 96)", "rgb(254, 190, 22)"],
      borderWidth: 0,
      //   radius: 40,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: " Doughnut Chart",
    },
  },
};
const PieChart = () => {
  return <Doughnut data={data} options={options} className={styles.dou} />;
};

export default PieChart;
