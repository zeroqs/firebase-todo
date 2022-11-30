import React from "react";
import {storage} from "../firebase";
import useApi from "./api";


export default function useForm() {
    const [title,setTitle] = React.useState('')
    const [description,setDescription] = React.useState('')
    const [date,setDate] = React.useState('')
    const [file, setFile] = React.useState('');
    const { actions } = useApi()

    function handleTitle(e) {
        setTitle(e.target.value)
    }
    function handleDescription(e) {
        setDescription(e.target.value)
    }
    function handleDate(e) {
        setDate(e.target.value)
    }
    function handleFile(e) {
        setFile(e.target.files[0])
    }

    async function  handleUpload(e) {
        e.preventDefault();
        const path = `/images/${file.name}`;
        const ref = storage.ref(path);
        await ref.put(file);
        const url = await ref.getDownloadURL();
        if (file.length === 0) {
            await actions.submitForm({title, description,date})
        } else {
            await actions.submitForm({title, description,date,url})
        }
        setFile('')
        setDate('')
    }

    return {
        data : {
            title,
            description,
            date
        },
        actions : {
            handleTitle,
            handleDescription,
            handleDate,
            handleFile,
            handleUpload
        }
    }
}