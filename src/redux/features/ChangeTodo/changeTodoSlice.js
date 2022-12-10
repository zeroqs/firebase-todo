import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {addDoc, collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";

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
            return rejectWithValue(error.message)
        }
    }
)


export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async function (data, {rejectWithValue,dispatch}) {
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                ...data,
                completed: false
            })
            dispatch(add({
                id : docRef.id,
                ...data
            }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, {rejectWithValue,dispatch}) {
        try {
            await deleteDoc(doc(db, "todos",id));
            dispatch(remove({id}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



const initialState = {
    todos : [],
    status : false,
    error : ''
}

export const counterSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        add : (state, action) => {
            console.log(action.payload)
            state.todos = [...state.todos, action.payload]
        },
        remove : (state, action) => {
            state.todos = [...state.todos.filter(todo => todo.id !== action.payload.id)]
        }
    },
    extraReducers : {
        [fetchTodos.pending]: (state,action) => {
            state.status = true
            state.error = null
        },
        [fetchTodos.fulfilled]: (state,action) => {
            state.status = false
            state.todos = action.payload
        },
        [fetchTodos.rejected]: (state,action) => {
            state.error = action.error
            state.status = false
        }
    }
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer