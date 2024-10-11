import React from 'react';
import { useState } from "react";


const Form = ({onAdd}) => {
    const [inputData, setInputData] = useState({});

    const handleInputChange = ( value) =>{
        
        setInputData({id:value , content: value , checked:false});
    }
    
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        onAdd(inputData);
        setInputData({id:"", content:"", checked:""});
    }
    return (
        <>
             <section className="form">
                    <form  onSubmit={handleOnSubmit}>
                       <div>
                       <input type="text" className='todo-input' 
                       value={inputData.content}
                       onChange={(e) =>handleInputChange(e.target.value)}/>
                       </div>
                       <button type='submit' className='todo-btn' >Add</button>
                    </form>
                </section>
        </>
    )
}

export default Form
