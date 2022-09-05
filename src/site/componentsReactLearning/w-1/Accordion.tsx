import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
    title: string
}

const Accordion = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
        return (
            <div>
                <div onClick={()=>{setCollapsed(!collapsed)}}><AccordionTitle title={props.title}/></div>
                {!collapsed && <AccordionBody/>}
            </div>
        )


}

export default Accordion;