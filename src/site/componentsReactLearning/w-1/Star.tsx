import React from 'react';

type StarType = {
 selected: boolean
}

const Star = (props: StarType) => {

    let color = props.selected ? 'white' : 'black'

    return (
        <span style={{color: color}}>★ </span>
    );
};

export default Star;