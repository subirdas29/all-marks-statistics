import { Box } from '@chakra-ui/react';
import React from 'react';
import MasudAllMarks from '../AllDevelopersMarks/MasudMarks/MasudAllMarks';
import MehidiAllMarks from '../AllDevelopersMarks/MehidiMarks/MehidiAllMarks';
import MinhajMiaAllMarks from '../AllDevelopersMarks/MinhajMiaMarks/MinhajMiaAllMarks';
import RemonAllMarks from '../AllDevelopersMarks/RemonMarks/RemonAllMarks';
import SubirAllMarks from '../AllDevelopersMarks/SubirMarks/SubirAllMarks';


const Home = () => {
    return (
        
           <Box>
           <RemonAllMarks></RemonAllMarks>
            <SubirAllMarks></SubirAllMarks>
            <MinhajMiaAllMarks></MinhajMiaAllMarks>
            <MasudAllMarks></MasudAllMarks>
            <MehidiAllMarks></MehidiAllMarks>
           </Box>
        
    );
};

export default Home;