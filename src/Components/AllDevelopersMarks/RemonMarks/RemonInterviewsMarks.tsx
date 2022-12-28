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
export const RemonInterviewsMarks: React.FC<{}> = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','august','sep','oct'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Expenses by Month',
      data: [65, 59, 80, 81, 56, 55, 40,30,47,23],
      backgroundColor: [
        'rgb(153, 102, 255)'
      ],
      borderColor: [
        'rgb(153, 102, 255)'
      ],
      responsive:true,
      maintainAspectRatio:false,
      borderWidth: 1
    }]
  });

  return (

  <Box w='100%' h='40vh' display='flex' alignItems="center" justifyContent="center"  ><Bar style={{height:'100%'}}data={data} /></Box>


)};

export default RemonInterviewsMarks;