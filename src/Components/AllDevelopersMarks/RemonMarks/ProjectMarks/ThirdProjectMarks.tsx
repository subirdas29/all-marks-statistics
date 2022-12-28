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

const ThirdProjectMarks = () => {
  return <Box w='100%' p={2} textAlign={[ 'left', 'center' ]}><Doughnut style={{height:'100%',width:'100%'}}  data={data} /><Text mt={6}>Third Project</Text></Box>; 
};

export default ThirdProjectMarks;