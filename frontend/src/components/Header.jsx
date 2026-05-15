export const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-purple-500 rounded-2xl shadow-lg p-6 mb-6 text-center">
      <h1 className="text-white text-2xl font-bold mb-1">Today</h1>
      <p className="text-purple-100 text-sm font-medium">{today}</p>
    </header>
  );
};

export default Header;
