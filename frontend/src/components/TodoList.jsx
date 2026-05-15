import TodoItem from './TodoItem';

export const TodoList = ({ tasks, onToggle, onDelete, loading }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {loading ? null : tasks.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No tasks here!
        </div>
      ) : (
        <div className="flex flex-col">
          {tasks.map((task) => (
            <TodoItem
              key={task._id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
