import React from 'react';

type PropsType = {
    title: string
    CollapseMenu: () => void
}

const AccordionTitle = (props: PropsType) => {
    return (
        <h3 onClick={props.CollapseMenu}>
            {props.title}
        </h3>
    );
};

export default AccordionTitle;