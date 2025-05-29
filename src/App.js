import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import { Container, Input, Button, TaskList, FilterButton } from './components/StyledComponents';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  return (
    <Container>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button type="submit">Add Task</Button>
      </form>
      <div>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterButton>
        <FilterButton active={filter === 'pending'} onClick={() => setFilter('pending')}>Pending</FilterButton>
        <FilterButton active={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</FilterButton>
      </div>
      <TaskList>
        {filteredTasks.length === 0 ? (
          <p>No tasks match the filter. Add one or adjust the filter!</p>
        ) : (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </TaskList>
    </Container>
  );
}

export default App;