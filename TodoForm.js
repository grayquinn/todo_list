import React, { useState } from 'react'
import App from '../App'

export default function TodoForm(props) {
    const {addTodo} = props
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }



    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='todo-input' placeholder='add a todo' />
            <button type='submit' className='todo-button'>add Todo</button>
        </form>
    )
}

