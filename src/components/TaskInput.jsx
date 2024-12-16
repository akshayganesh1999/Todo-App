import React, { useState } from 'react'
import './taskinput.css'

function TaskInput({ addTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addTask(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <>
            <form className="task-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className="btn btn-success" type="submit">
                    Add Task
                </button>
            </form>
        </>
    )
}

export default TaskInput
