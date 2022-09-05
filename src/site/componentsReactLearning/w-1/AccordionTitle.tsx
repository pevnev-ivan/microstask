import React from 'react';

type PropsType = {
    title: string
}

const AccordionTitle = (props: PropsType) => {
    return (
        <h3>
            {props.title}
        </h3>
    );
};

export default AccordionTitle;