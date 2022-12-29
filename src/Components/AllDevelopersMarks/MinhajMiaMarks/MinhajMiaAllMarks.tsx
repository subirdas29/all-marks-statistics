import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import AllProjectsFeedBack from './AllProjectsFeedBack';
import MinhajMiaInterviewMarks from './MinhajMiaInterviewMarks';
import MinhajMiaJobApply from './MinhajMiaJobApply';
import FirstProjectMarks from './ProjectMarks/FirstProjectMarks';
import SecondProjectMarks from './ProjectMarks/SecondProjectMarks';
import ThirdProjectMarks from './ProjectMarks/ThirdProjectMarks';
import TotalAvarageMarks from './TotalAvarageMarks';

const MinhajMiaAllMarks = () => {
    return (
        <div>
            <Box backgroundColor='#1F2937' mx='12' mt='24' p={[4, 6]} boxShadow='2xl' rounded='md'>
            <Text textAlign={[ 'left', 'center' ]} fontWeight="bold" mb='40px' fontSize={32} color='#D3D4DA'>Minhaj Mia Marks</Text>
            <SimpleGrid columns={[1, null, 2]} gap='40px' >
            
            <MinhajMiaInterviewMarks></MinhajMiaInterviewMarks>
            <MinhajMiaJobApply></MinhajMiaJobApply>
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

export default MinhajMiaAllMarks;