import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Masud', 'Mehidi', 'Subir','minhajmia' ],
  datasets: [
    {
      label: `Marks`,
      data: [8,10,7,9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
       
      ],
      borderWidth: 1,
    },
  ],
};


const SecondProjectMarks = () => {
  return <Box p={5} mt={6} textAlign={[ 'left', 'center' ]}><Doughnut data={data} /><Text mt={6}>Second Project</Text></Box>; 
};

export default SecondProjectMarks;