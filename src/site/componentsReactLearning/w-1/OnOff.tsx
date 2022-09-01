import React from 'react';

type OnOfftype = {
    trigger: boolean
    ChangeLight: () => void
}

const OnOff = (props: OnOfftype) => {
    let color = ''
    props.trigger ? color = 'white' : color = 'darkgreen'

    return (
        <div>
            <button onClick={props.ChangeLight}>On</button>
            <button onClick={props.ChangeLight}>Off</button>
            <span style={{color: color}}> ⬤ </span>
        </div>
    );
};


export default OnOff;