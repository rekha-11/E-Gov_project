import React from 'react'
import './style.css'

export default function Todoitem(props) {
    
    return (
        <div className='todo-item'>
            <input type = 'checkbox' 
            checked = {props.notes.completed}
            onChange= {() => props.handleChange(props.notes.id)}></input>
            <p>{props.notes.text}</p>
        </div>
    )
}
