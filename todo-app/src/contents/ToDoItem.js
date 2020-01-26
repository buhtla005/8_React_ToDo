import React from 'react'

function ToDoItem(props){
    return(
        //checked svojstvo se isto moze sredit kao fun
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.todo.completed}
            onClick={()=>props.changeClickedState(props.todo.id)}
            className="col-4"/>
            <h3>Zadatak {props.todo.id}: {props.todo.text}</h3>
        </div>
    )
}

export default ToDoItem