import React, {ChangeEvent, useState} from 'react';

type ControlledInputType = {
    onChangeHandle: (actualValue: string, type: string) => void
    value: string
}
type ControlledCheckBoxType = {
    onChangeHandle: (actualValue: boolean, type: string) => void
    value: boolean
}
type ControlledSelectType = {
    onChangeHandle: (actualValue: string, type: string) => void
    value: string
}

const ControlledComponents = () => {
    const [parentValues, setParentValues] = useState(
        {
            controlledInput: '',
            controlledCheckBox: false,
            controlledSelect: '',
        }
    )

    const onChangeHandle = (actualValue: string | boolean, type: string) => {
            setParentValues({...parentValues, [type]: actualValue})
    }

    return (
        <div>
            <ControlledInput onChangeHandle={onChangeHandle} value={parentValues.controlledInput}/>
            <ControlledCheckBox onChangeHandle={onChangeHandle} value={parentValues.controlledCheckBox}/>
            <ControlledSelect onChangeHandle={onChangeHandle} value={parentValues.controlledSelect}/>
        </div>
    );
};

const ControlledInput = (props: ControlledInputType) => {
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.value
        props.onChangeHandle(actualValue, 'controlledInput')
    }
return(
    <><input onChange={onChangeHandle} value={props.value}/></>
);};

const ControlledCheckBox = (props: ControlledCheckBoxType) => {
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.checked
        props.onChangeHandle(actualValue, 'controlledCheckBox')
    }

    return(<><input type="checkbox" checked={props.value} onChange={onChangeHandle}/></>
    );
};

const ControlledSelect = (props: ControlledSelectType) => {
    const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        let actualValue = e.currentTarget.value
        props.onChangeHandle(actualValue, 'controlledCheckBox')
    }

    return(
        <><select onChange={onChangeHandle} value={props.value} >
            <option value="1">Tosmk</option>
            <option value="2">Minsk</option>
            <option value="3">Novosibirsk</option>
        </select>
        </>
    );
};

export default ControlledComponents;