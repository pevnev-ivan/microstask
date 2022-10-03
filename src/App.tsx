import React, {useState} from 'react';
import './App.css';

import Cars from "./site/componentsMicrotasks/CarsTable/CarsTable";
import StudentsList from "./site/componentsMicrotasks/StudentsList/StudentsList";
import {UseStateHomeWork} from "./site/componentsMicrotasks/UseStateHomeWork/UseStateHomeWork";
import {MoneyCurrency} from "./site/componentsMicrotasks/MoneyCurrency/MoneyCurrency";
import Inputs from "./site/componentsMicrotasks/Inputs/Inputs";
import ReactLearning from "./site/componentsReactLearning/ReactLearning";
import AdditionalLessons from "./site/AdditionalLessons/AdditionalLessons";

function App() {

    const addMessage = (title: string, id: number) => {
        switch (id) {
            case 1:
                setMessageL([{message: title}, ...messageL])
                title = '';
                break;
            case 2:
                alert(id)
                setMessageR([{message: title}, ...messageL])
                title = '';
                break;
        }
    }

    let [messageL, setMessageL] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let [messageR, setMessageR] = useState(
        [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const students = [
        {id: 1, name: 'James', age: 9},
        {id: 2, name: 'Charles', age: 12},
        {id: 3, name: 'Ivan', age: 13},
        {id: 4, name: 'Alex', age: 14},
        {id: 5, name: 'Dimitry', age: 15},
        {id: 6, name: 'Thomas', age: 17},
    ]

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    return (
        <div className="App">
            <div className={'Container'}>
                <StudentsList students={students}/>
                <Cars topCars={topCars}/>
                <UseStateHomeWork/>
                <MoneyCurrency money={money}/>
                <Inputs messageR={messageR} messageL={messageL} addMessage={addMessage}/>
                <ReactLearning/>
                <AdditionalLessons/>


            </div>
        </div>
    );
}

export default App;
