import React from 'react';
import {useState } from "react";
import "./Board.css"

const Cell = (props) => {
    const id = props.id;
    //var value = props.value;
    //const {value, setValue} = useState(props.value);



    return(
        <button
        className="cell"
        value={props.value}
        id={id}
        onClick={(e) => props.onClick(e)}
        disabled={props.locked}
        >
            {props.value}
        </button>
    );
};

export default Cell;