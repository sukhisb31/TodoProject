import React from 'react';
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ data , onDelete, onHandleChecked,checked }) => {
    return (
        <>
             <li className='todo-item'>
                                    <span className={checked ? "checkList" : "notCheckList" }>{data}</span>
                                    <button className='check-btn'
                                        onClick={() => onHandleChecked(data)}
                                    >
                                        <MdCheck/>
                                    </button>
                                    <button className='delete-btn' onClick={()=>onDelete(data)}>
                                        <MdDeleteForever/>
                                    </button>
                                </li>
        </>
    )
}

export default TodoList
