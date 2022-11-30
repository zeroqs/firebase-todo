import React from 'react';
import TodoItem from "./TodoItem";
import styles from './todoItem.less'


const TodoList = ({todos,isLoading}) => {

    return (
        <div className={styles.todoCards}>
            <ul>
                {isLoading ? <p>Loading</p> : Array.isArray(todos) ? todos.map(todo => <TodoItem  key={todo.id} {...todo}/>) : null}
            </ul>
        </div>
    );
};
export default TodoList;
