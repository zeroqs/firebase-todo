import React from 'react';
import styles from "../../app.less";
import useForm from "../../hooks/useForm";

const Form = () => {
    const {data : {title,date,description},actions : {handleUpload,handleChange,changeTitle,changeDescription,changeDate}} = useForm()


    return (

        <form onSubmit={event => handleUpload(event)} className={styles.form}>
            <input onChange={(e) => changeTitle(e.target.value)} value={title} type="text" required placeholder="Task"/>
            <input className={styles.input_data} type="submit" value="Add todo"/>
            <textarea onChange={(e) => changeDescription(e.target.value)} value={description} cols="30" rows="10" placeholder="Description"></textarea>
            <div className={styles.btn_col}>
                <input onChange={handleChange} type="file"/>
                <input onChange={(e) => changeDate(e.target.value)} value={date} className={styles.input_data} type="date"/>
            </div>
        </form>

    );
};
export default Form;
