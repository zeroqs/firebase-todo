import styles from './app.less'
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import {createTodo, deleteTodo, getTodos} from "./api/api";

const App = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState([])
    console.log(todos)

    useEffect(() => {
        getTodos('todos').then(setTodos)
    },[])

    const handleSubmit = (data) => {
        createTodo({
            ...data
        }).then(todo => {
            setTodos([...todos, todo])
        })
    }

    async function onDeleteTodo (id) {
        deleteTodo(id).then(todoId => {
            setTodos([...todos.filter(todo => todo.id !== todoId)])
        })
    }

    return (
        <div className={styles.wrapper}>
            <Form isLoading={isLoading} setIsLoading={setIsLoading} onSubmit={handleSubmit}/>
            <TodoList onDelete={onDeleteTodo} todos={todos}/>
        </div>
    );
}

export default App;
