import React, {ChangeEvent, useRef, useState} from 'react';
import s from '../month-1/ReactW1.module.css'

type ValueByChangeType = { onChangeHandler: (actualValue: string) => void }
type ValueByPressEnter = { onPressHandler: (actualValue: string) => void }
type ValueByClickBtn = { onClickHandler: (actualValue: string) => void }

const UncontrolledComponents = () => {
    const [value, setValue] = useState({
        ValueByChange: '',
        ValueByPress: '',
        ValueByClick: '',
    })

    const onChangeHandler = (actualValue: string) => {
        setValue({...value, ValueByChange: actualValue})
    }

    const onPressHandler = (actualValue: string) => {
        setValue({...value, ValueByPress: actualValue})
    }

    const onClickHandler = (actualValue: string) => {
        setValue({...value, ValueByClick: actualValue})
    }

    return (
        <div className={s.container} style={{width: 'fit-content',padding: '20px', border: 'solid white 2px', borderRadius: '20px'}}>
            <div >
                <TrackValueOfUncontrolledInput onChangeHandler={onChangeHandler}/>
                <GetValueOfUncontrolledInputByPress onPressHandler={onPressHandler}/>
                <GetValueOfUncontrolledInputByClick onClickHandler={onClickHandler}/>
            </div>
            <div style={{display: 'flex', flexDirection:'column', gap: '32px', width: '400px',alignItems: 'flex-start'}}>
                <p className={s.Values}> ValueOfUncontrolledInput ByChange: {value.ValueByChange}</p>
                <p className={s.Values}> ValueOfUncontrolledInput ByEnter: {value.ValueByPress}</p>
                <p className={s.Values}> ValueOfUncontrolledInput ByClick: {value.ValueByClick}</p>
            </div>
        </div>
    );
};


const TrackValueOfUncontrolledInput = (props: ValueByChangeType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.value
        props.onChangeHandler(actualValue)
    }
    return (<div><input onChange={onChangeHandler}/></div>
    )
}
const GetValueOfUncontrolledInputByPress = (props: ValueByPressEnter) => {
    const onPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            let actualValue = e.currentTarget.value
            props.onPressHandler(actualValue)
        }
    }
    return (<div><input onKeyDown={onPressHandler}/></div>
    )
}

const GetValueOfUncontrolledInputByClick = (props: ValueByClickBtn) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        let actualValue = inputRef.current && inputRef.current.value
        actualValue && props.onClickHandler(actualValue)
    }
    return (<div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <input ref={inputRef} style={{marginLeft: '65px'}}/>
            <button style={{width: '41px', height: '41px'}} onClick={onClickHandler}></button>
        </div>
    )
}

export default UncontrolledComponents;

