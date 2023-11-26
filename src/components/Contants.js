import React from 'react';
function contacts (props){
    return (
        <div>
            <h1>Information for individual student</h1>
            <h2>kindly provide with your{props.cellPhone} your email {props.email}and your home box {props.box}</h2>
        </div>
    )
}
export default contacts;