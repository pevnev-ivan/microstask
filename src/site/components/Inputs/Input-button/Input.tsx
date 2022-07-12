import React, {ChangeEvent} from 'react';
import s from "../FullInput/FullInput.module.css";


type MessageType = {
    message: string;
}

type InputType = {
    title: string
    setTitle: (title: string) => void
    message: Array<MessageType>
}

const Input = (props: InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <>
            <h2> Inpt/Btn separate</h2>
            <input value={props.title} onChange={onChangeInputHandler} type="text"/>

            {/*<div className={s.FullInput__Messages}>*/}
            {/*    {props.message.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <ul>*/}
            {/*                <li key={index}>{el.message}</li>*/}
            {/*            </ul>*/}

            {/*        )*/}

            {/*    })}*/}
            {/*</div>*/}
        </>
    );
};

export default Input;