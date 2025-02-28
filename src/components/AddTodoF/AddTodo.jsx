import { useState } from 'react';

function AddTodo({ updateList }) {
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <input
                type="text"
                value={inputText}
                placeholder="Add your next todo..."
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                onClick={() => {
                    if (inputText.trim()) {
                        updateList(inputText);
                        setInputText('');
                    }
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddTodo;