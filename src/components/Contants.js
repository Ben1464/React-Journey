import React from 'react';
import Students from './Student'
function contacts (props){
    return (
        <div>
            <h1>Information for individual student</h1>
            <h2>kindly provide with your{props.cellPhone} your email {props.email}and your home box {props.box}</h2>
            <p>Through the props {props.name}, {props.occupationName}</p>
        </div>
    )
    
}
export default contacts;