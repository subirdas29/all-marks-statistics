import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import AllProjectsFeedBack from './AllProjectsFeedBack';

import FirstProjectMarks from './ProjectMarks/FirstProjectMarks';
import SecondProjectMarks from './ProjectMarks/SecondProjectMarks';
import ThirdProjectMarks from './ProjectMarks/ThirdProjectMarks';
import RemonInterviewMarks from './RemonInterviewMarks';
import RemonJobApply from './RemonJobApply';

import TotalAvarageMarks from './TotalAvarageMarks';

const RemonAllMarks = () => {
    return (
        <div>
            <Box backgroundColor='#1F2937' m={[10, 12]} p={[4, 6]}>
            <Text textAlign={[ 'left', 'center' ]} mb='40px' fontWeight="bold" fontSize={32} color='#D3D4DA'>Remon Marks</Text>
            <SimpleGrid columns={[1, null, 2]} gap='40px' >
            
            <RemonInterviewMarks></RemonInterviewMarks>
            <RemonJobApply></RemonJobApply>
            
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

export default RemonAllMarks;