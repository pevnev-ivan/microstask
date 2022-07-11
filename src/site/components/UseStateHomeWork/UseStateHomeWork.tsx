import React, {useState} from "react";
import {Button} from "../UniversalButton/button";

export const UseStateHomeWork = () => {


let [a, setA] = useState(1)

    const NumberManipulation = (command: number) => {
        switch (command) {
            case 1:
                setA(++a);
                break;
            case 2:
                setA(--a);
                break;
            case 3:
                setA(a=0);
                break;
        }}

    return (
        <div>
           <h1>UseState HomeWork</h1>
            <div> {a}</div>
            <Button name={'Increase'} callBack={()=>NumberManipulation(1)}/>
            <Button name={'Decrease'} callBack={()=>NumberManipulation(2)}/>
            <Button name={'Zero'} callBack={()=>NumberManipulation(3)}/>
        </div>
    )
}
