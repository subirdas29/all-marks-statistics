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
        '#F94264','#EC9D52','#51576C','#1B8EF9',
        
      ],
      borderColor: [
        '#F94264','#EC9D52','#51576C','#1B8EF9',
       
      ],
      borderWidth: 1,
    },
  ],
};

const ThirdProjectMarks = () => {
  return <Box w='100%' boxShadow='dark-lg' p='4' rounded='md' backgroundColor='#111827' textAlign={[ 'left', 'center' ]}><Doughnut style={{height:'100%',width:'100%'}}  data={data} /><Text color="#B2B5BA" mt={6}>Third Project</Text></Box>; 
};

export default ThirdProjectMarks;