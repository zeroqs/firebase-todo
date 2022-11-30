import {useEffect, useState} from "react";
import {createTodo, deleteTodo, getTodos} from "../api/api";


export default function useApi() {

    const [todos, setTodos] = useState([])

    const [isLoading, setIsLoading] = useState([])

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

    return {
        data : {
            todos,
            isLoading
        },
        actions : {
            handleSubmit,
            onDeleteTodo,
            setIsLoading,
        }
    }
}