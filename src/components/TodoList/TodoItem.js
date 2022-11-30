import React from 'react';
import styles from './todoItem.less';
import useApi from "../../hooks/api";

const TodoItem = ({id,title,description,checked,date,url}) => {

    const { actions } = useApi()

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
                <input type="checkbox" />
                <p>{date}</p>
            </div>
            <button>edit</button>
            <button onClick={() => actions.onDeleteTodo(id)}>delete</button>
        </li>
    );
};

export default TodoItem;
