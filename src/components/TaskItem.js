import React from 'react';
import { Task, Button } from './StyledComponents';

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <Task completed={task.completed}>
            <span onClick={() => toggleTask(task.id)}>
                {task.text}
            </span>
            <Button
                danger
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </Button>
        </Task>
    );
}

export default TaskItem;