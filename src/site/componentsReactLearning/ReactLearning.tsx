import React, {useState} from 'react';
import Accordion from "./w-1/Accordion";
import Rating from "./w-1/Rating";
import PageTitle from "./w-1/PageTitle";
import OnOff from "./w-1/OnOff";

const ReactLearning = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [trigger, setTrigger] = useState<boolean>(false)

    const CollapseMenu = () => {setCollapsed(!collapsed)}
    const ChangeLight = () => {setTrigger((!trigger))}

    return (
        <>
            <PageTitle title={'React Learning'}/>
            <Accordion title={'Menu'} collapsed={collapsed} CollapseMenu={CollapseMenu}/>
            <Accordion title={'Rules'} collapsed={collapsed} CollapseMenu={CollapseMenu}/>
            <Rating selected={3}/>
            <Rating selected={5}/>
            <Rating selected={1}/>
            <OnOff trigger={trigger} ChangeLight={ChangeLight}/>
        </>
    );
};

export default ReactLearning;