export const FilterButtons = ({ filter, setFilter }) => {
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-medium capitalize ${
            filter === f
              ? 'bg-purple-500 text-white'
              : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
