import React from 'react';
import FirstProjectMarks from './FirstProjectMarks';
import SecondProjectMarks from './SecondProjectMarks';
import ThirdProjectMarks from './ThirdProjectMarks';

const AllProjectMarks = () => {
    return (
        <div>
            <FirstProjectMarks></FirstProjectMarks>
            <SecondProjectMarks></SecondProjectMarks>
            <ThirdProjectMarks></ThirdProjectMarks>
        </div>
    );
};

export default AllProjectMarks;