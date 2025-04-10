"use client"
import {useState, useEffect, ChangeEvent} from "react";
import styles from "./todo.module.css";


interface ITodo {
    id: number;
    name: string;
    completed: boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodo] = useState<ITodo[]>([])
    const [newTask, setNewTask] = useState<string>("")

    const [isMounted, setIsMounted] = useState<boolean>(false)

    /// Initialize in localstorage
    useEffect(() => {
        setIsMounted(true)
        const saveTodo = localStorage.getItem("todos")
        if(saveTodo){
            setTodo(JSON.parse(saveTodo))
        }
    }, [])

    useEffect(() => {
        if(isMounted){
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }, [todos, isMounted]);


    //Add new task
    const addTask = (): void => {
        if (!newTask.trim()) return

        const newTodo: ITodo = {
            id: Date.now(),
            name: newTask,
            completed: false
        }

        setTodo([...todos, newTodo])
        setNewTask("")
    }

    //Change completed status
    const toggleTaskCompletion = (id: number): void => {
        setTodo(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    ///Delete task
    const deleteTask = (id: number): void => {
        setTodo(todos.filter((todo) => todo.id !== id))
    }
    return(
        <div className={styles.container}>
            <h1>Список задач</h1>
            <div className={styles.todoSection}>
                <input
                    className={styles.input}
                    type="text"
                    value={newTask}
                    placeholder="Введите название задачи..."
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewTask(event.target.value)}/>
                <button className={styles.addButton} onClick={addTask}>Добавить</button>
            </div>
            <div>
                {
                    todos.length === 0 ?
                        <h1>Tasks is null</h1>
                        :
                        todos.map(todo => (
                            <div key={todo.id} className={styles.todoItems}>
                                <div>
                                    <input
                                        checked={todo.completed}
                                        type="checkbox"
                                        onChange={() => toggleTaskCompletion(todo.id)}
                                    />
                                    <span className={styles.todoName}>{todo.name}</span>
                                </div>
                                <button className={styles.deleteButton} onClick={() => deleteTask(todo.id)}>Delete</button>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}


export default Todo