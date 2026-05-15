export const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-purple-50 group border-b border-purple-100 last:border-b-0">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer accent-purple-600"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
        />
        <span
          className={`text-lg ${
            task.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="text-gray-400 hover:text-red-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity focus:opacity-100 p-2"
        aria-label="Delete task"
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
