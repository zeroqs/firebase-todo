import {db} from "../../../firebase";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {doc, getDocs , collection} from "firebase/firestore";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const querySnapshot = await getDocs(collection(db, "todos"));
            // doc.data() is never undefined for query doc snapshots
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async function (data, {rejectWithValue}) {
        return db.collection("todos").add({
            ...data,
            completed: false
        })
            .then(docRef => docRef.get())
            .then(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            .catch((error) => {
                return error
            });
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id,) {
        return db.collection("todos").doc(id).delete()
            .then(() => id)
            .catch((error) => {
                return error
            });
    }
)