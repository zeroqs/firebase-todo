import styles from './app.less'
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import React from "react";
import useApi from "./hooks/api";


const App = () => {
    const {data: { todos }} = useApi()



    return (
        <div className={styles.wrapper}>
            <Form />
            <TodoList todos={todos} isLoading={false} />
        </div>
    );
}

export default App;
