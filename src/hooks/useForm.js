import React from "react";
import {storage} from "../firebase";
import {useDispatch} from "react-redux";
import {createTodo} from "../redux/features/ChangeTodo/changeTodoSlice";

export default function useForm() {
    const [title,setTitle] = React.useState('')
    const [description,setDescription] = React.useState('')
    const [date,setDate] = React.useState('')
    const [file, setFile] = React.useState('');
    const dispatch = useDispatch()


    function handleChange(e) {
        if (e.target.files[0])
            setFile(e.target.files[0]);
    }


    function changeTitle(value) {
        setTitle(value)
    }
    function changeDescription(value) {
        setDescription(value)
    }
    function changeDate(value) {
        setDate(value)
    }



    async function  handleUpload(e,onSubmit) {
        e.preventDefault();
        const path = `/images/${file.name}`;
        const ref = storage.ref(path);
        await ref.put(file);
        const url = await ref.getDownloadURL();
        if (file.length === 0) {
            dispatch(createTodo({title, description,date}))
        } else {
            dispatch(createTodo({title, description,date, url}))
        }
        setFile('');
        setTitle('')
        setDescription('')
        setDate('')
    }

    return {
        data : {
            title,
            description,
            date,
        },
        actions : {
            handleChange,
            handleUpload,
            changeTitle,
            changeDescription,
            changeDate,
        }
    }
}