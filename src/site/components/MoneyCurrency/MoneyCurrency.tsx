import {Button} from "../UniversalButton/button";
import React, {useState} from "react";
import s from "./MoneyCurrency.module.css"

//type FilterType = 'All' | 'RUBLS' | 'Dollars'

type MoneyType = {
    banknots: string
    value: number
    number: string
}
type MoneyCurrencyType = {
    money: Array<MoneyType>

}
export const MoneyCurrency = (props: MoneyCurrencyType) => {

    // const [filter, setFilter] = useState<FilterType>('All')
    const [filter, setFilter] = useState('All')
    let currentMoney = props.money

    switch (filter) {
        case 'RUBLS':
            currentMoney = props.money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
            break;
        case 'Dollars':
            currentMoney = props.money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
            break;
    }

    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }



    return (
        <div>
            <h1>Button + Filter HomeWork</h1>
            <div className={s.MoneyList}>

                <table>
                    <th>Type</th>
                    <th>Value</th>
                    <th>ID</th>

                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <tr className={s.Row} key={index}>
                        <td className={s.Item}> {objFromMoneyArr.banknots}</td>
                        <td className={s.Item}> {objFromMoneyArr.value}</td>
                        <td className={s.Item}> {objFromMoneyArr.number}</td>
                        </tr>
                        )
                    })}




                </table>

                    </div>
            <Button name={'Rubles'} callBack={()=>onClickFilterHandler('RUBLS')}/>
            <Button name={'Dollars'} callBack={()=>onClickFilterHandler('Dollars')}/>
            <Button name={'All'} callBack={()=>onClickFilterHandler('All')}/>
        </div>
    )
}