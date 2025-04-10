"use client"
import {useState} from "react";
import styles from "./todo.module.css"; // ✅ Правильно


interface ITodo {
    id: number;
    name: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodo] = useState<ITodo[]>([])
    const [newTask, setNewTask] = useState<string>("")

    //Add new task
    const addTask = () => {
        if (newTask.trim() === "") return

        const newTodo: ITodo = {
            id: Date.now(),
            name: newTask,
            completed: false
        }

        setTodo([...todos, newTodo])
        setNewTask("")
    }

    return(
        <div>
            <h1>Список задач</h1>
            <div>
                <input className={styles.input} type="text" value={newTask} onChange={event => setNewTask(event.target.value)}/>
                <button onClick={addTask}>Add</button>
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