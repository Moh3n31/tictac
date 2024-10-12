import React from "react";

export default function Squares (props){
    return (
        <div onClick={props.onSquareClick} className="square" id={props.id}>
            {props.value}
        </div>
    )
}