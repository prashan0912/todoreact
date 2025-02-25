import { useState } from 'react';
import Todo from '../TodoF/Todo';
import App from '../../App';
function TodoList({ list }) {
    // const list = [
    //     { id: 1, ATodoData: "fill water in bottle" },
    //     { id: 2, ATodoData: "fill water in tank" }
    // ]
    // const [state, setState] = useState(list);
    return (
        <>
            <div>
                {list.length > 0 && list.map(param => <Todo key={param.id} todoData={param.ATodoData} />)}
            </div>
        </>
    )
}
export default TodoList;
