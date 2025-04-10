"use client"
import {useState} from "react";
import styles from "./todo.module.css";

interface ITodo {
    id: string;
    name: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodo] = useState<ITodo[]>([])
    const [newTask, setNewTask] = useState<string>("")
    const showTodo = () => {
        console.log(newTask)
        setNewTask(" ")
    }
    return(
        <div>
            <h1>Список задач</h1>
            <div>
                <input type="text" value={newTask} onChange={event => setNewTask(event.target.value)}/>
                <button onClick={showTodo}>Add</button>
            </div>
            <div>
                {
                    todos.length === 0 ?
                        <h1>Tasks is null</h1>
                        :
                        todos.map(todo => (
                            <div key={todo.id}>
                                <span>{todo.name}</span>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}


export default Todo