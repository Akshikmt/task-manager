import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import { getAllTasks, createTask, toggleTask, deleteTask } from './api/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTasks();
      setTasks(response.data);
    } catch (error) {
      alert('Failed to fetch tasks. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title) => {
    try {
      setLoading(true);
      await createTask(title);
      await fetchTasks();
    } catch (error) {
      alert('Failed to add task.');
      setLoading(false);
    }
  };

  const handleToggle = async (id) => {
    try {
      setLoading(true);
      await toggleTask(id);
      await fetchTasks();
    } catch (error) {
      alert('Failed to update task.');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteTask(id);
      await fetchTasks();
    } catch (error) {
      alert('Failed to delete task.');
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-purple-50 relative overflow-hidden">
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-md mx-auto px-4 py-6 sm:py-10 relative z-10 flex flex-col h-[100dvh]">
        <Header />

        <FilterButtons filter={filter} setFilter={setFilter} />

        <div className="bg-white rounded-3xl shadow-xl shadow-purple-100/60 overflow-hidden flex flex-col flex-1 min-h-[400px]">
          <TodoList
            tasks={filteredTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            loading={loading}
          />

          <div className="border-t border-purple-100">
            <AddTask onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
