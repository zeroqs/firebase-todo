import styles from './app.less'
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import useApi from "./hooks/useApi";
import {useEffect} from "react";
import {fetchTodos} from "./redux/features/Async/api";
import {useDispatch} from "react-redux";

const App = () => {
    const { data : { todos }, actions : { handleSubmit, onDeleteTodo } } = useApi()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, []);


    return (
        <div className={styles.wrapper}>
            <Form onSubmit={handleSubmit}/>
            <TodoList onDelete={onDeleteTodo} todos={todos}/>
        </div>
    );
}

export default App;
