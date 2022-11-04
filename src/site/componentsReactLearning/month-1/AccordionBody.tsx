import React from 'react';

type UsersType = {
    id: string,
    name: string
}
type PropsType = {
    users: Array<UsersType>
    onClickAccordionFn: (id: string, name: string) => void
}

const AccordionBody = (props: PropsType) => {
    return (
        <ul>
            {props.users.map((el, index) =>
                <li onClick={() => props.onClickAccordionFn(el.id, el.name)} key={el.id}>{el.name}</li>)}
        </ul>
    );
};

export default AccordionBody;