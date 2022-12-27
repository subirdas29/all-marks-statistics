import React from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
  import { useState } from 'react';
//   import { Pie } from 'react-chartjs-2';
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);
  
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );
  export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export function Statistics () {
//     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const [data, setData] = useState({
//   labels: labels,
//   datasets: [{
//     label: 'Expenses by Month',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgb(153, 102, 255)'
//     ],
//     borderColor: [
//       'rgb(153, 102, 255)'
//     ],
//     borderWidth: 1
//   }]
// });
    return (
        <div>
            <Box w="50%" h="32px" >
            <Pie data={data} /></Box>
            <Text textAlign={[ 'center' ]} />joy
            </div>
           
    );
};

export default Statistics;