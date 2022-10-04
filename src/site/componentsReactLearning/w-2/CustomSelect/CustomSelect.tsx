import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './CustomSelect.module.css'

type ArrayType = {
    id: string
    name: string
}
type PropsType = {
    array: Array<ArrayType>
    onClickHandler: (id: string) => void
    selectValue: string
}


const CustomSelect = (props: PropsType) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.array[0].id)

    // useEffect(() => {
    //     setHover(props.)
    // })
    const onClickSelect = (name: string) => {
        props.onClickHandler(name)
        setActive(!active)
    }

    const onClickAccordion = () => {
        setActive(!active)
    }
    const onMouseEnter = (id: string) => {
        setHover(id)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.array.length; i++) {
                if (props.array[i].id === hover) {
                    e.key === 'ArrowDown' ? setHover(props.array[i + 1 ].id) : setHover(props.array[i - 1 ].id)
                }
            }
        }

        if (e.key === 'Enter' || e.key ===  'Escape'){
            let index = props.array.map(el => el.id).indexOf(hover)
            props.onClickHandler(props.array[index].name)
            setActive(!active)
        }

    }

    let optionsClassname = `${s.selectOptionsOpen + ' ' + s.selectContainer}`


    return (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'fit-content'}}>

            <div className={s.selectContainer} onClick={onClickAccordion} onKeyUp={onKeyUp} tabIndex={0}>
                <ul >
                    <li>{props.selectValue}</li>

                    {!active && <div className={optionsClassname}>
                        {props.array.map(el =>
                            <li
                                onMouseEnter={() => onMouseEnter(el.id)}
                                onClick={() => onClickSelect(el.name)}
                                key={el.id}
                                className={hover === el.id ? s.hoveredItem : ''}
                            >
                                {el.name}
                            </li>)}
                    </div>}
                </ul>

            </div>
        </div>
    );
};

export default CustomSelect;