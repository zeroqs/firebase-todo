import styles from './app.less'
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./redux/features/ChangeTodo/changeTodoSlice";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);


    return (
        <div className={styles.wrapper}>
            <Form />
            <TodoList  />
        </div>
    );
}

export default App;
