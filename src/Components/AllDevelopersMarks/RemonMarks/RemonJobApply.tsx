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
  const labels = ["20/12/22", "21/12/22", "22/12/22", "23/12/22", "24/12/22", "25/12/22","26/12/22","27/12/22","28/12/22","29/12/22","30/12/22"];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Job Apply in per Day',
      data: [20,15,10,14,12,16,17,18,20,12,17],
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

  return (

  <Box w='100%' boxShadow='dark-lg' p='4' rounded='md' bg='black' h='40vh' display='flex' alignItems="center" justifyContent="center"  ><Bar style={{height:'100%'}}data={data} options={options}/></Box>


)};

export default RemonJobApply;