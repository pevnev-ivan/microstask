import React from 'react';
import Star from "./Star";

type RatingType = {
    selected: number
}

const Rating = (props: RatingType) => {
    return (
        <div>
          <Star selected={props.selected > 0}/>
          <Star selected={props.selected > 1}/>
          <Star selected={props.selected > 2}/>
          <Star selected={props.selected > 3}/>
          <Star selected={props.selected > 4}/>
        </div>
    );
};

export default Rating;