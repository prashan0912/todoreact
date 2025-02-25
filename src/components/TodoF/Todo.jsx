import { useState } from "react";
function Todo({ todoData, isFinished, changedFinished }) {
    const [finishedState, setFinishedState] = useState(isFinished)
    return (
        <>
            <div>
                <input type="checkbox"
                    checked={finishedState}
                    onChange={(e) => setFinishedState(e.target.checked)}
                    changedFinished={e=>e.target.checked}
                />
                {todoData}
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </>
    )

}
export default Todo;