import { OrbitControls } from '@react-three/drei';
import React from 'react';
import Mjolnir from './Mjolnir';

const Experience = () => {
    return (
        <>
            <ambientLight intensity={-10}/>
            <OrbitControls />
            <Mjolnir />
        </>
    );
}

export default Experience;
