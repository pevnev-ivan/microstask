import React, {useState} from 'react';
import CustomSelect from "./CustomSelect";





const Parent = () => {

    const cities = [
        {id: '1', name: 'Vitebsk'},
        {id: '2', name: 'Moscow'},
        {id: '3', name: 'Habarovsk'},
        {id: '4', name: 'Los-Angeles'},
    ]

    const [selectValue, setSelectValue] = useState(cities[0].name)



    const onClickHandler = (name: string) => {
        setSelectValue(name)
        // selectValue = cities.find((el) => el.id === selectValue)
    }

    return (
        <>
            <CustomSelect selectValue={selectValue} onClickHandler={onClickHandler} array={cities}/>
        </>
    );
};

export default Parent;