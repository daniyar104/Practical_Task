"use client"
import {useState} from "react";

interface ITodo {
    id: string;
    name: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const showTodo = () => {
        console.log(todo)
        setTodo(" ")
    }
    return(
        <div>
            <h1>Список задач</h1>
            <input onChange={event => setTodo(event.target.value)}/>
            <button onClick={showTodo}>Add</button>
        </div>
    )
}


export default Todo