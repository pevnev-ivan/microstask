import React, {ChangeEvent, useState} from 'react';
import s from './FullInput.module.css'

type MessageType = {
    message: string;

}

type FullInputType = {
    message: Array<MessageType>
    addMessage: (title: string, id: number) => void
}


function FullInput(props: FullInputType) {
    let [title, setTitle] = useState('')
    const id = 1

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title, id)
        setTitle(title = '')
    }
    return (
        <div className={s.FullInput}>
            <h2> Input + Button</h2>

            <input value={title} onChange={onChangeInputHandler} type="text"/>
            <button className={s.FullInput__Button} onClick={onClickButtonHandler}> +</button>

            <div className={s.FullInput__Messages}>
                {props.message.map((el, index) => {
                    return (
                        <ul>
                            <li key={index}>{el.message}</li>
                        </ul>

                    )

                })}
            </div>
        </div>
    )
}

export default FullInput;