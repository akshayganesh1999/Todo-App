import React from 'react'
import TaskItem from './TaskItem'
import './tasklist.css'

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {

    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <>
            <div className="task-list">
                <h2>Pending Tasks</h2>
                {pendingTasks.length > 0 ? (
                    pendingTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleTaskCompletion={toggleTaskCompletion}
                            deleteTask={deleteTask}
                        />
                    ))
                ) : (
                    <p>No pending tasks</p>
                )}
                <h2>Completed Tasks</h2>
                {completedTasks.length > 0 ? (
                    completedTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleTaskCompletion={toggleTaskCompletion}
                            deleteTask={deleteTask}
                        />
                    ))
                ) : (
                    <p>No completed tasks</p>
                )}
            </div>
        </>
    )
}

export default TaskList
