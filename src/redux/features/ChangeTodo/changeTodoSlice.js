import { createSlice } from '@reduxjs/toolkit'
import {fetchTodos} from "../Async/api";

const initialState = {
    todos : [],
    status : '',
    error : ''
}

export const counterSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        add : (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        remove : (state, action) => {
            state.todos = [...state.todos.filter(todo => todo.id !== action.payload.id)]
        }
    },
    extraReducers : {
        [fetchTodos.pending]: (state,action) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchTodos.fulfilled]: (state,action) => {
            state.status = 'resolved'
            state.todos = action.payload
        },
        [fetchTodos.rejected]: (state,action) => {
            state.error = action.error
        }
    }
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer