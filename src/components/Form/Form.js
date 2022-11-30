import React from 'react';
import styles from "../../app.less";
import {storage} from "../../firebase";

const Form = ({isLoading,setIsLoading,onSubmit}) => {
    const [title,setTitle] = React.useState('')
    const [description,setDescription] = React.useState('')
    const [date,setDate] = React.useState('')
    const [file, setFile] = React.useState('');


    function handleChange(e) {
        if (e.target.files[0])
            setFile(e.target.files[0]);
    }


    async function  handleUpload(e) {
        e.preventDefault();
        const path = `/images/${file.name}`;
        const ref = storage.ref(path);
        await ref.put(file);
        const url = await ref.getDownloadURL();
        if (file.length === 0) {
            onSubmit({title, description,date})
            setIsLoading(!isLoading)
        } else {
            onSubmit({title, description,date,url})
            setIsLoading(!isLoading)
        }
        setFile('');
    }

    return (
        <form onSubmit={handleUpload} className={styles.form}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" required placeholder="Task"/>
            <input className={styles.input_data} type="submit" value="Add todo"/>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} cols="30" rows="10" placeholder="Description"></textarea>
            <div className={styles.btn_col}>
                <input onChange={handleChange} type="file"/>
                <input onChange={(e) => setDate(e.target.value)} value={date} className={styles.input_data} type="date"/>
            </div>
        </form>

    );
};
export default Form;
