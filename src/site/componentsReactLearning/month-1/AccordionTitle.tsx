import React from 'react';

type PropsType = {
    title: string
}

const AccordionTitle = (props: PropsType) => {
    return (
        <h3 style={{color: 'whitesmoke', fontSize:'25px'}}>
            {props.title}
        </h3>
    );
};

export default AccordionTitle;