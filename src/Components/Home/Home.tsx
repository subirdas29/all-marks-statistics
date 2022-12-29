import React from 'react';
import MasudAllMarks from '../AllDevelopersMarks/MasudMarks/MasudAllMarks';
import MinhajMiaAllMarks from '../AllDevelopersMarks/MinhajMiaMarks/MinhajMiaAllMarks';
import RemonAllMarks from '../AllDevelopersMarks/RemonMarks/RemonAllMarks';
import SubirAllMarks from '../AllDevelopersMarks/SubirMarks/SubirAllMarks';


const Home = () => {
    return (
        <div>
            <RemonAllMarks></RemonAllMarks>
            <SubirAllMarks></SubirAllMarks>
            <MinhajMiaAllMarks></MinhajMiaAllMarks>
            <MasudAllMarks></MasudAllMarks>
        </div>
    );
};

export default Home;