import React,{useEffect, useState} from 'react';

const TodoDateFormat = () => {
    const [dateTime, setDateTime] = useState();

    useEffect (()=>{
        // eslint-disable-next-line no-unused-vars
        const interval = setInterval(()=>{
         const now = new Date();
         const dateFormat = now.toLocaleDateString();
         const timeFormat = now.toLocaleTimeString();
 
 setDateTime(`${dateFormat} - ${timeFormat}`);
 
         }, 1000)
 },[]);
    return (
        <>
               <h2>{dateTime}</h2>
        </>
    )
}

export default TodoDateFormat
