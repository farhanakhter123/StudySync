import React from 'react'
import "./inputField.css"

function InputField(props){
    return(
        <>
        <div className='inputFeild flex justify-center items-center'>
            <input type={props.type} className='in border-b-2' required="required" {...props}/>
            <label htmlFor="" className='lab bg-opacity-90'>{props.label}</label>
        </div>
        </>
    );
}
export default InputField;