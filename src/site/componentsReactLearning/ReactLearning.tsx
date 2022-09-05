import React, {useState} from 'react';
import Accordion from "./w-1/Accordion";
import Rating from "./w-1/Rating";
import PageTitle from "./w-1/PageTitle";
import OnOff from "./w-1/OnOff";

const ReactLearning = () => {
    return (
        <>
            <PageTitle title={'React Learning'}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Rules'}/>
            <Rating/>
            <Rating />
            <Rating/>
            <OnOff/>
            <OnOff/>
        </>
    );
};

export default ReactLearning;