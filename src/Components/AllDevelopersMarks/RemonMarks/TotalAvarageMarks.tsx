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
         '#FF1D46'
        ],
        borderColor: [
          '#FF1D46'
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
    return <Box w="100%" boxShadow='dark-lg' p='4' rounded='md' display='flex' alignItems="center" justifyContent="center"  backgroundColor='#111827' h="60vh">
        <Line style={{height:'100%',width:'100%'}} options= {options} data={data} /></Box>
};

export default TotalAvarageMarks;

