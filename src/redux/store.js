import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/ChangeTodo/changeTodoSlice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
})