import {Button} from "../UniversalButton/button";
import React, {useState} from "react";

type MoneyType = {
    banknots: string
    value: number
    number: string
}
type MoneyCurrencyType = {
    money: Array<MoneyType>
}
export const MoneyCurrency = (props: MoneyCurrencyType) => {

    const onClickFilterHandler = (nameButton: string) => {

    }




    return (
        <div>
            <h1>Button + Filter HomeWork</h1>
            <Button name={'Rubles'} callBack={()=>onClickFilterHandler('Alex')}/>
            <Button name={'Dollars'} callBack={()=>onClickFilterHandler('Alex')}/>
            <Button name={'All'} callBack={()=>onClickFilterHandler('Alex')}/>
        </div>
    )
}