import AddTodo from './components/AddTodoF/AddTodo'
import Todo from './components/TodoF/Todo'
import TodoList from './components/TodoListF/TodoList'
import { useState } from 'react'
function App() {
  let myList = [
    { id: 1, ATodoData: "fill water in bottle", finished: false },
    { id: 2, ATodoData: "fill water in tank", finished: false },
    { id: 3, ATodoData: "fill petrol in tank", finished: true }

  ]
  const [stateList, setList] = useState(myList);
  return (
    <>
      <AddTodo updateList={p1 => setList([
        ...stateList, { id: stateList.length + 1, ATodoData: p1, finished: false }])} />

      <TodoList list={stateList} updateList={setList} />
    </>
  )
}
export default App
