import React from 'react';
import styles from './todoItem.less';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../redux/features/ChangeTodo/changeTodoSlice";

const TodoItem = ({id ,title ,description  ,date ,url}) => {

    const dispatch = useDispatch()


    return (
        <li className={styles.todoCard}>
            <div className={styles.todoText}>
                <h1>{title}</h1>
                <p>{description}</p>

            </div>
            {
                url ? <a href={url}>Скачать файл</a> : null
            }
            <div className={styles.todoCheck}>
                <p>{date}</p>
            </div>
            <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
        </li>

    );
};

export default TodoItem;
