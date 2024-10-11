import React, {  useState } from 'react';
import TodoList from './TodoList';
import Form from "./Form";
import "./Todo.css";
import TodoDateFormat from './TodoDateFormat';



// const todokey = "todokey";

const Todo = () => {


const [addTask, setAddTask] = useState(()=>{
    const rawTodo = localStorage.getItem("todoKey");
    console.log(localStorage.getItem("todoKey"));
    
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
});


// -------------------Handle Submit -------------------
const handleOnSubmit = (inputData) =>{

    const {id , content, checked} = inputData;
    //console.log(input);
    
    // check input field empty or not
    if(!content) return;
    // check data exist or not
   const itemMatch = addTask.find((currentTask)=> currentTask.content === content);
   if(itemMatch) return;
   
    // update and add new project
    setAddTask((prev)=> [...prev , {id, content, checked}]);

    
}

    // ------------------Handle Delete ----------------
    const handleDelete = (item) => {
       console.log(item);
       const remainingItem = addTask.filter((curTask) => curTask.content !== item);
       setAddTask(remainingItem);
    }
    //----------------- handle Clear ------------
    const handleClearAll = (e) =>{
        e.preventDefault();
        setAddTask([]);
    }

    // ---------------- checked function---------
    const handleOnChecked = (content) =>{
       
        
        const checkedTask = addTask.map ((currentTask) =>{
            if (currentTask.content === content){
                return {...currentTask, checked: !currentTask.checked}
            }else
            {
                return currentTask;
            }
        });
        setAddTask(checkedTask);
    }

    //Add data to Local Storage Function
    // eslint-disable-next-line no-undef
    localStorage.setItem( "todoKey", JSON.stringify(addTask));



    return (
        <>
          <div className="todo-container">
                <div className="header">
                    <h1>Todo List</h1>
                    <TodoDateFormat/>
                </div>
             
               <Form onAdd={handleOnSubmit}/>
                <section className="myUnOrderList">
                    {
                        addTask.map((currentTask) => {
                            return <>
                               <TodoList
                               key={currentTask.id}
                               data={currentTask.content}
                               checked={currentTask.checked}
                               onDelete={handleDelete}
                               onHandleChecked={handleOnChecked}
                               />
                            </>
                        })
                    }
                </section>

                {/* ---------- clear button -------------- */}

                <section className="btn">
                    <button className='clear-btn' onClick={handleClearAll}>Clear All </button>
                </section>
            </div>  
        </>
    )
}

export default Todo;
