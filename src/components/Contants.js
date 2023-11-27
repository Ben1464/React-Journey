import React from 'react';
import Students from './Student'
function contacts ({name,cellPhone,email,box,occupationName,}){
    return (
        <div>
            <h1>Information for individual student</h1>
            <h2>kindly provide with your{cellPhone} your email {email}and your home box {box}</h2>
            <p>Through the props {name}, {occupationName}</p>
            <section>The heeder section </section>
        </div>

    )
    
}
export default contacts;