import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { useState } from 'react';
  import { Bar } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const RemonJobApply: React.FC<{}> = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [data, setData] = useState({
      labels: labels,
      datasets: [{
        label: 'Expenses by Month',
        data: [20, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgb(153, 102, 255)'
        ],
        borderColor: [
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
      }]
    });


    return <Box w="100%"><Bar data={data} /></Box>
};

export default RemonJobApply;