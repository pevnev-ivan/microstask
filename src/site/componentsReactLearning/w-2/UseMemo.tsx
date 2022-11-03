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
            <UsersArrayExample/>
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

const UsersRender = (props: {users: Array<string>}) => {
    console.log('Users map fn')
    return (
        <div>
            {props.users.map(e => <li>{e}</li>)}
        </div>
    )
}



const Users = React.memo(UsersRender)

const UsersArrayExample = () => {

    const addUser = () => {

        setUsers([...users, 'Sveta'])
    }

    console.log('Main fn')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Artem', 'Alex', 'Ivan', 'Katya'])

    const usersArray = useMemo(() => {
        return users.filter(e => e.toLowerCase().indexOf('a' ) > -1)
    }, [users])

    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            <button onClick={() => addUser()}>+</button>
            <p>{counter}</p>
            <Users users={usersArray}/>
        </div>
    )

}


export default DifficultCounterExample;