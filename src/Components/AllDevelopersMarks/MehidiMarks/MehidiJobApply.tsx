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
export const MehidiJobApply: React.FC<{}> = () => {
  const labels = ["20/12/22", "21/12/22", "22/12/22", "23/12/22", "24/12/22", "25/12/22","26/12/22","27/12/22","28/12/22","29/12/22","30/12/22"];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Job Apply in per Day',
      data: [20,15,10,14,12,16,17,18,20,12,17],
      backgroundColor: [
        '#1B8EF9','#51576C','#51576C','#F94264','#51576C','#EC9D52','#51576C', '#1B8EF9','#51576C','#F94264','#51576C',
      ],
      borderColor: [
        '#1B8EF9','#51576C','#51576C','#F94264','#51576C','#EC9D52','#51576C', '#1B8EF9','#51576C','#F94264','#51576C',
      ],
      responsive:true,
      maintainAspectRatio:false,
      borderWidth: 1
    }]
  });
 

  return (

  <Box w='100%' boxShadow='dark-lg' p='4' rounded='md' backgroundColor='#111827' h='40vh' display='flex' alignItems="center" justifyContent="center"  ><Bar style={{height:'100%'}}data={data} /></Box>


)};

export default MehidiJobApply;