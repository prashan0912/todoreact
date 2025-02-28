import { useState } from 'react';
import AddTodo from './components/AddTodoF/AddTodo';
import TodoList from './components/TodoListF/TodoList';
import TodoContext from './Context/TodoContext';

function App() {
  const initialList = [
    { id: 1, todoData: "Fill water in bottle", finished: false },
    { id: 2, todoData: "Fill water in tank", finished: false },
  ];

  const [list, setList] = useState(initialList);

  const updateListFun = (newTodo) => {
    if (newTodo.trim() !== "") {
      setList((prevList) => [
        ...prevList,
        { id: Date.now(), todoData: newTodo, finished: false }
      ]);
    }
  };

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <AddTodo updateList={updateListFun} />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
