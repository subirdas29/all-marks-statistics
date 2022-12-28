import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line} from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Interview','Job-Apply','Projects'],
    datasets: [
      {
        label: 'Avarage Marks',
        data: [70,20,30,40,60],
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
        responsive:true,
        maintainAspectRatio:false,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugin:{
     legend:true
    },
       scales: {
         y: {
          
           grid:
           {
             color:'rgba(17, 20, 26)',
             opacity:0.5
           }
         },
         x: {
          
           grid:
           {
             color:'rgba(17, 20, 26)',
             opacity:0.5
           }
         }
       }
     }


const TotalAvarageMarks = () => {
    return <Box w="100%" boxShadow='dark-lg' p='4' rounded='md' display='flex' alignItems="center" justifyContent="center"  bg='black' h="60vh">
        <Line style={{height:'100%',width:'100%'}} options= {options} data={data} /></Box>
};

export default TotalAvarageMarks;

