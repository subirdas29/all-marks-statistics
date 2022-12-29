import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import AllProjectsFeedBack from './AllProjectsFeedBack';
import FirstProjectMarks from './ProjectMarks/FirstProjectMarks';
import SecondProjectMarks from './ProjectMarks/SecondProjectMarks';
import ThirdProjectMarks from './ProjectMarks/ThirdProjectMarks';
import SubirInterviewMarks from './SubirInterviewMarks';
import SubirJobApply from './SubirJobApply';
import TotalAvarageMarks from './TotalAvarageMarks';

const SubirAllMarks = () => {
    return (
        <div>
            <Box backgroundColor='#1F2937' m={[10, 12]} p={[4, 6]}>
            <Text textAlign={[ 'left', 'center' ]} mb='40px' fontSize={32} color='#D3D4DA'>Subir Das Marks</Text>
            <SimpleGrid columns={[1, null, 2]} gap='40px' >
            
            <SubirInterviewMarks></SubirInterviewMarks>
            <SubirJobApply></SubirJobApply>
            </SimpleGrid>
            <SimpleGrid columns={[2, null, 3]} gap='40px'  my="40px">
            <FirstProjectMarks></FirstProjectMarks>
            <SecondProjectMarks></SecondProjectMarks>
            <ThirdProjectMarks></ThirdProjectMarks>
            </SimpleGrid>
         
            <AllProjectsFeedBack></AllProjectsFeedBack>
            <TotalAvarageMarks></TotalAvarageMarks>
            
            </Box>
        </div>
    );
};

export default SubirAllMarks;