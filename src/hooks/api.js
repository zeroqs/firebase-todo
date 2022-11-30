import {useEffect, useState} from "react";
import * as api from '../api/api'

export default function useApi() {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(todos)
    useEffect(() => {
        api.getTodos('todos').then(setTodos)
    },[])

    
    function submitForm(data) {
        setIsLoading(!isLoading)
        return api.createTodo({
            ...data
        }).then(todo => {
            setTodos([...todos, todo])
            setIsLoading(!isLoading)
        })
    }


    async function onDeleteTodo (id) {
        return api.deleteTodo(id).then(todoId => {
            setTodos([...todos.filter(todo => todo.id !== todoId)])
        })
    }


    return {
        data : {
            todos,
            isLoading
        },
        actions : {
            submitForm,
            onDeleteTodo,
        }
    }
}