import React, {useState} from 'react';
import FullInput from "./FullInput/FullInput";
import Input from "./Input-button/Input";
import s from "./Inputs.module.css"
import {Button} from "../UniversalButton/button";
import s2 from "./FullInput/FullInput.module.css";


type MessageTypeL = {
    message: string;
}

type MessageTypeR = {
    message: string;
}

type FullInputType = {
    messageL: Array<MessageTypeL>
    messageR: Array<MessageTypeR>
    addMessage: (title: string, id: number) => void
}


const Inputs = (props: FullInputType) => {

    const clickHandler = () => {
        props.addMessage(title, id)
        setTitle(title = '')
    }

    let [title, setTitle] = useState('')
    const id = 2;

    return (
        <> <h1>Inputs HomeWork</h1>
        <div className={s.Inputs__Container}>

            <div><FullInput message={props.messageL} addMessage={props.addMessage}/></div>

            <div className={s2.FullInput}>
            <div><Input message={props.messageR} title={title} setTitle={setTitle}/> <Button name={'+'} callBack={clickHandler}/></div>

            <div className={s2.FullInput__Messages + ' ' + s2.FullInput__Messages_R}>
                {props.messageR.map((el, index) => {
                    return (
                        <ul>
                            <li key={index}>{el.message}</li>
                        </ul>

                    )

                })}
            </div>
            </div>
        </div>
        </>
    );
};

export default Inputs;