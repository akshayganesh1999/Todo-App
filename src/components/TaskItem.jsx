import React from 'react'
import './taskitem.css'

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
    return (
        <>
            <div className={`task-item ${task.completed ? "completed" : ""}`}>
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
                <div className="task-actions">
                    {task.completed ? (
                        <button
                            className="btn btn-warning"
                            onClick={() => toggleTaskCompletion(task.id)}
                        >
                            Undo
                        </button>
                    ) : (
                        <button
                            className="btn btn-success"
                            onClick={() => toggleTaskCompletion(task.id)}
                        >
                            Complete
                        </button>
                    )}
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskItem
