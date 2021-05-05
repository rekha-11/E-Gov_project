import React, {useState} from 'react'
import Todoitem from './Todoitem'
import data from './Tododatas'

export default function App() {
    const [Todo, setTodo] = useState(data)

    const handleChange =(id)=> {
        setTodo(prevState => {
            const updatedTodos= prevState.map(todo => {
                if(todo.id===id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
                })
                return updatedTodos

            })
    
    }


    const todoItems = Todo.map(item => <Todoitem key = {item.id}
         notes = {item}
          handleChange= {handleChange}/>)
    return (
        <div className= 'todo-list'>
            {todoItems}
        </div>
    )
}
