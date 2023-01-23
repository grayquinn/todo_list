import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {BsCheck2Square} from 'react-icons/bs'


export default function Todoitem(props) {
    const { todo, removeTodo, completeTodo } = props
    return(
        <div className={todo.completed ? 'todo-row complete': 'todo-row'}>
            {todo.text}
            <div className='iconsContainer'>
            <RiCloseCircleLine  style={{marginRight: 5}} onClick={() => removeTodo(todo.id)}/>
            <BsCheck2Square onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}