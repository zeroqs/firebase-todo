import React from 'react';
import TodoItem from "./TodoItem";
import styles from './todoItem.less'
import {useSelector} from "react-redux";



const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const status = useSelector(state => state.todos.status)


    return (
        <div className={styles.todoCards}>
            <ul>
                {
                    status ? <p>Loading</p>
                    : Array.isArray(todos) ? todos.map(todo => <TodoItem
                            key={todo.id}
                            {...todo}/>) : null
                }
            </ul>
        </div>
    );
};
export default TodoList;
