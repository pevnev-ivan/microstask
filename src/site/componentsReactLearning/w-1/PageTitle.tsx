import React from 'react';

type PropsType = {
    title: string
}

const PageTitle = (props: PropsType) => {
    return (
        <h1>
            {props.title}
        </h1>
    );
};

export default PageTitle;