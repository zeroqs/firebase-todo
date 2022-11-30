import React from 'react';
import styles from './todoItem.less';
const TodoItem = ({onDelete,id,title,description,checked,date,url}) => {

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
            <button onClick={onDelete}>delete</button>
        </li>
    );
};

export default TodoItem;
