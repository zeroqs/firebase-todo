import React from 'react';
import styles from "../../app.less";
import useForm from "../../hooks/useForm";


const Form = () => {
    const {actions, data } = useForm()

    return (
        <form onSubmit={actions.handleUpload} className={styles.form}>
            <input onChange={(e) => actions.handleTitle(e)} value={data.title} type="text" required placeholder="Task"/>
            <input className={styles.input_data} type="submit" value="Add todo"/>
            <textarea onChange={(e) => actions.handleDescription(e)} value={data.description} cols="30" rows="10" placeholder="Description"></textarea>
            <div className={styles.btn_col}>
                <input onChange={actions.handleFile} type="file"/>
                <input onChange={actions.handleDate} value={data.date} className={styles.input_data} type="date"/>
            </div>
        </form>

    );
};
export default Form;
