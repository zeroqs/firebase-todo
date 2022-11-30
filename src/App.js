import styles from './app.less'
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import useApi from "./hooks/useApi";

const App = () => {
    const { data : { todos }, actions : { handleSubmit, onDeleteTodo } } = useApi()

    return (
        <div className={styles.wrapper}>
            <Form onSubmit={handleSubmit}/>
            <TodoList onDelete={onDeleteTodo} todos={todos}/>
        </div>
    );
}

export default App;
