import { useState } from 'react';
import Todo from '../TodoF/Todo';
import App from '../../App';
function TodoList({ list, updateList }) {
    return (
        <>
            <div>
                {list.length > 0 && list.map(param => <Todo key={param.id}
                    todoData={param.ATodoData}
                    isFinished={param.finished}
                    id={param.id}
                    changedFinished={(isFinished) => {
                        const updatedList = list.map(t => {
                            if (t.id == param.id) {
                                param.finished = isFinished;
                            }
                            return param;
                        })
                        setList(updateList)
                    }} />)}
            </div>
        </>
    )
}
export default TodoList;
