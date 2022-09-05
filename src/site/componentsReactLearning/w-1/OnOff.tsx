import React, {useState} from 'react';

const OnOff = () => {

    const [trigger, setTrigger] = useState<boolean>(false)

    let indicator = {
        padding: '5px 15px',
        margin: '5px',
        borderRadius: '15px',
        border: '2px solid white',
        opacity: !trigger ? '50%' : '100%',
        backgroundColor: trigger ? '' : 'rgba(0, 0, 0, 0.2)'
    }
    let onStyle = {
        opacity: trigger ? '50%' : '100%',
        backgroundColor: trigger ? 'rgba(0, 0, 0, 0.2)' : '',
    }
    let offStyle = {
        opacity: !trigger ? '50%' : '100%',
        backgroundColor: !trigger ? 'rgba(0, 0, 0, 0.2)' : '',
    }



    return (
        <div>
            <button style={onStyle} onClick={()=>setTrigger(!trigger)}>On</button>
            <button style={offStyle} onClick={()=>setTrigger(!trigger)}>Off</button>
            <span style={indicator}></span>
        </div>
    );
};


export default OnOff;