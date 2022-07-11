import React, {useState} from 'react';
import './App.css';

import Cars from "./site/components/CarsTable/CarsTable";
import StudentsList from "./site/components/StudentsList/StudentsList";
import {UseStateHomeWork} from "./site/components/UseStateHomeWork/UseStateHomeWork";
import {MoneyCurrency} from "./site/components/MoneyCurrency/MoneyCurrency";



function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
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
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])




    return (
        <div className="App">
            <div className={'Container'}>
            <StudentsList students={students}/>
            <Cars topCars={topCars}/>
            <UseStateHomeWork/>
            <MoneyCurrency money={money} />





            </div>
        </div>
    );
}

export default App;
