import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
    title: string
    collapsed: boolean
    CollapseMenu: () => void
}

const Accordion = (props: PropsType) => {

        return (
            <div>
                <AccordionTitle CollapseMenu={props.CollapseMenu} title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )


}

export default Accordion;