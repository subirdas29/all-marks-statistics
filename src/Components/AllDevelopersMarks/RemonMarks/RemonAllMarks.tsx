import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import AllProjectMarks from './ProjectMarks/AllProjectMarks';
import RemonInterviewsMarks from './RemonInterviewsMarks';
import RemonJobApply from './RemonJobApply';

const RemonAllMarks = () => {
    return (
        <div>
            <SimpleGrid columns={[2, null, 2]} spacing='40px'>
            <RemonInterviewsMarks></RemonInterviewsMarks>
            <RemonJobApply></RemonJobApply>
            <AllProjectMarks></AllProjectMarks>
            </SimpleGrid>
        </div>
    );
};

export default RemonAllMarks;