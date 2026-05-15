import { useState } from 'react';

export const AddTask = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') {
      alert("Task cannot be empty");
      return;
    }

    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between px-4 py-3 bg-gray-50"
    >
      <input
        type="text"
        placeholder="Type New Task Here"
        className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-lg"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 text-2xl font-light shadow-md shrink-0 ml-3"
      >
        +
      </button>
    </form>
  );
};

export default AddTask;
