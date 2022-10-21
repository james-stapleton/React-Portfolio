import React from 'react';

export default function Card(props) {

    return (
        <div className='container card '>
            <h1> {props.projectName} </h1>
            <img src={props.image} alt={props.image}></img>
        </div>
    )
}