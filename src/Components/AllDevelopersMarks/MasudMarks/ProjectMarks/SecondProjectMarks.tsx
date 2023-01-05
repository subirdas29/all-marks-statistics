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
        '#51576C','#1B8EF9','#EC9D52','#F94264',
        
      ],
      borderColor: [
        '#51576C','#1B8EF9','#EC9D52','#F94264',
       
      ],
      borderWidth: 1,
    },
  ],
};


const SecondProjectMarks = () => {
  return <Box w='100%' boxShadow='dark-lg' p='4' rounded='md' backgroundColor='#111827' textAlign={[ 'left', 'center' ]}><Doughnut style={{height:'100%',width:'100%'}}  data={data} /><Text color="#B2B5BA" mt={6}>Second Project</Text></Box>; 
};

export default SecondProjectMarks;