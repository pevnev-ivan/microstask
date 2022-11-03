import React, {useMemo, useState} from 'react';

const DifficultCounterExample = () => {

    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo (() => {
        let tempResultA = 1
        for (let i = 1; i < a+1; i++) {
            let fake = 0;
            while (fake < 100000000) {fake++}

            tempResultA = i * tempResultA
            console.log(tempResultA)
        }
        return tempResultA
    }, [a])


    for (let i = 1; i < b+1; i++) {

        resultB = i * resultB
        console.log(resultB)
    }
    if (a === 0) {resultA = 0}
    if (a === 0) {resultB = 0}
    return (
        <div>

            <div>
                <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
                <p style={{display: 'inline',color:'whitesmoke'}}>Result for A: {resultA}</p>
            </div>
            <div>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
                <p style={{display: 'inline',color:'whitesmoke'}}>Result for B: {resultB}</p>
            </div>
        </div>
    );
};


export default DifficultCounterExample;