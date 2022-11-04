import React from 'react';
import Accordion from "./month-1/Accordion";
import Rating from "./month-1/Rating";
import PageTitle from "./month-1/PageTitle";
import OnOff from "./month-1/OnOff";
import UncontrolledComponents from "./month-2/UncontrolledComponents";
import ControlledComponents from "./month-2/ControlledComponents";
import Parent from "./month-2/CustomSelect/Parent";
import DifficultCounterExample from "./month-2/UseMemo";
import Month3 from "./month-3/Month-3";

const ReactLearning = () => {
    return (
        <>
            <PageTitle title={'React Learning'}/>
            <Accordion title={'Menu'}/>
            <Rating/>
            <OnOff/>

            <h1>Uncontrolled Components</h1><UncontrolledComponents/>
            <h1>Controlled Components</h1><ControlledComponents/>
            <h1>Custom Select</h1><Parent/>

            <DifficultCounterExample/>
            <Month3/>
        </>
    );
};

export default ReactLearning;