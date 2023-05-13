import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ Bordercolor, backgroundColor, data }) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 1,
        borderColor: Bordercolor,
        fill: "start",
        backgroundColor: backgroundColor,
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      x: {
        display: false,
      },

      y: {
        display: false,
      },
    },
  };
  return <Line options={options} data={data} />;
};

export default LineGraph;
