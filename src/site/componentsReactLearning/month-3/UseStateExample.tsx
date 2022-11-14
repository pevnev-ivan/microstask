import React, {useMemo, useState} from 'react';

const UseStateExample = () => {
    return (
        <>
<FirstDemo/>
        </>
    );
};

// Some difficult function
const generateData = () => {
    console.log('Some difficult function')
    let a = 1
    let tempResultA = 1
    for (let i = 1; i < a+1; i++) {
        let fake = 0;
        while (fake < 2000000000) {fake++}
        tempResultA = i * tempResultA
    }
    return 1
}

const FirstDemo = () => {
    console.log('Demo1')
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => state + 1


    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(changer)}>
                useState Example 1
            </button>
        </>
    )
}

export default UseStateExample;