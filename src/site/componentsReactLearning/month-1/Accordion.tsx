import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type PropsType = {
    title: string
}

const Accordion = (props: PropsType) => {

    const users = [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Artem'},
        {id: '3', name: 'Alexandr'},
        {id: '4', name: 'Sergey'},
    ]

    const onClickAccordionFn = (id: string, name: string) => {
        alert('id: ' + id + ', name: ' + name)
    }

    const [collapsed, setCollapsed] = useState<boolean>(false)
        return (
            <div>
                <div
                    onClick={()=>{setCollapsed(!collapsed)}}><AccordionTitle title={props.title}/>
                </div>

                {!collapsed && <AccordionBody users={users} onClickAccordionFn={onClickAccordionFn}/>}
            </div>
        )


}

export default Accordion;