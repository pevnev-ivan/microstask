import React from 'react';

type StarType = {
    halfSelected: boolean
    selected: boolean
}

const Star = (props: StarType) => {


    let startStyle = {
        opacity: props.selected ? '' : props.halfSelected ? '50%' : '',
        color: props.selected ? 'white' : props.halfSelected ? 'white' : 'black'
    }
    return (
        <span style={startStyle}>★ </span>
    );
};

export default Star;