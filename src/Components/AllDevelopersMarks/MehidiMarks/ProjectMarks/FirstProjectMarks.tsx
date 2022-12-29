import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Masud', 'Mehidi', 'Subir','minhajmia'],

  datasets: [
    {

      label: `Marks`,
      data: [8,10,7,9],
      backgroundColor: [
        '#1B8EF9','#51576C','#F94264','#EC9D52'
        
      ],
      borderColor: [
        '#1B8EF9','#51576C','#F94264','#EC9D52'
       
      ],
      responsive:true,
      maintainAspectRatio:false,
      borderWidth: 1,
    },
  ],
};


const FirstProjectMarks = () => {

    return <Box w='100%' boxShadow='dark-lg' p='4' rounded='md' backgroundColor='#111827'  textAlign={[ 'left', 'center' ]} > <Doughnut style={{height:'100%',width:'100%'}} data={data} /><Text mt={5}>First Project</Text></Box>;
};

export default FirstProjectMarks;