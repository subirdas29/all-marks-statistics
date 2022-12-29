import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useRef } from "react";
import { Box, flexbox, Text } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Masud','Mehidi','MinhajMia','Subir'],
  datasets: [
    {
      label: "Interview Marks",
      data: [60,65,60,62],
      fill: true,
      backgroundColor: '#F56D20',
      borderColor:'#EC9D52',
      tension:0.5
    },
    
  ]
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



const RemonInterviewMarks= () => {

  const chartRef = useRef<ChartJS<"line", number[], string>>(null);


  return (
    <div>
      
<Box w='100%' boxShadow='dark-lg' p='4' rounded='md' backgroundColor='#111827' display='flex' alignItems="center" justifyContent="center"  h='40vh' >

<Line style={{height:'100%'}} data={data} options={options} ref={chartRef} /></Box>
      
    </div>
  );
}

export default RemonInterviewMarks;