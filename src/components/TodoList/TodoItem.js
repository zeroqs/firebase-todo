import React from 'react';
import styles from './todoItem.less';

const TodoItem = ({onDelete ,id ,title ,description  ,date ,url}) => {


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
            <button onClick={() => onDelete(id)}>delete</button>
        </li>

    );
};

export default TodoItem;
