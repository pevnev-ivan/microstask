import React, {useState} from 'react';
import Star from "./Star";


const Rating = () => {

    let [selected, setSelected] = useState(0)
    let [halfSelected, setHalfSelected] = useState(0)

    return (
        <div>
            <span onMouseLeave={()=>{setHalfSelected(0)}} onMouseOver={()=>{setHalfSelected(1)}} onClick={()=>{setSelected(selected = 1); setHalfSelected(0)}}><Star selected={selected > 0} halfSelected={halfSelected > 0}/></span>
            <span onMouseLeave={()=>{setHalfSelected(0)}} onMouseOver={()=>{setHalfSelected(2)}} onClick={()=>{setSelected(selected = 2); setHalfSelected(0)}}><Star selected={selected > 1} halfSelected={halfSelected > 1}/></span>
            <span onMouseLeave={()=>{setHalfSelected(0)}} onMouseOver={()=>{setHalfSelected(3)}} onClick={()=>{setSelected(selected = 3); setHalfSelected(0)}}><Star selected={selected > 2} halfSelected={halfSelected > 2}/></span>
            <span onMouseLeave={()=>{setHalfSelected(0)}} onMouseOver={()=>{setHalfSelected(4)}} onClick={()=>{setSelected(selected = 4); setHalfSelected(0)}}><Star selected={selected > 3} halfSelected={halfSelected > 3}/></span>
            <span onMouseLeave={()=>{setHalfSelected(0)}} onMouseOver={()=>{setHalfSelected(5)}} onClick={()=>{setSelected(selected = 5); setHalfSelected(0)}}><Star selected={selected > 4} halfSelected={halfSelected > 4}/></span>
        </div>
    );
};

export default Rating;