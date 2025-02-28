import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../TodoF/Todo";

function TodoList() {
    const { list, setList } = useContext(TodoContext);

    const changeFinished = (id, isFinished) => {
        const updatedList = list.map((t) =>
            t.id === id ? { ...t, finished: isFinished } : t
        );
        setList(updatedList);
    };

    const onDelete = (id) => {
        const updatedList = list.filter((t) => t.id !== id);
        setList(updatedList);
    };

    const onEdit = (id, todoText) => {
        const updatedList = list.map((t) =>
            t.id === id ? { ...t, todoData: todoText } : t
        );
        setList(updatedList);
    };

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        isFinished={todo.finished}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => changeFinished(todo.id, isFinished)}
                        onDelete={() => onDelete(todo.id)}
                        onEdit={(todoText) => onEdit(todo.id, todoText)}
                    />
                ))}
        </div>
    );
}

export default TodoList;
