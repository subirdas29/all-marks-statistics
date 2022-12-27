import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import AllProjectMarks from './ProjectMarks/AllProjectMarks';
import FirstProjectMarks from './ProjectMarks/FirstProjectMarks';
import SecondProjectMarks from './ProjectMarks/SecondProjectMarks';
import ThirdProjectMarks from './ProjectMarks/ThirdProjectMarks';
import RemonInterviewsMarks from './RemonInterviewsMarks';
import RemonJobApply from './RemonJobApply';

const RemonAllMarks = () => {
    return (
        <div>
            <Box backgroundColor='#24273D' m={[10, 12]} p={[4, 6]}>
            <Text textAlign={[ 'left', 'center' ]}>Remon Marks</Text>
            <SimpleGrid columns={[2, null, 2]} spacing='40px' >
            <RemonInterviewsMarks></RemonInterviewsMarks>
            <RemonJobApply></RemonJobApply>
            <FirstProjectMarks></FirstProjectMarks>
            <SecondProjectMarks></SecondProjectMarks>
            <ThirdProjectMarks></ThirdProjectMarks>
            <AllProjectMarks></AllProjectMarks>
            </SimpleGrid>
            </Box>
        </div>
    );
};

export default RemonAllMarks;