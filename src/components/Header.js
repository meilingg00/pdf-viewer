import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-16 bg-blue-500 text-white flex items-center px-6">
      {/* Left: Icon */}
      <div className="text-2xl font-bold">
        🍎
      </div>

      {/* Center: Title */}
      <div className="flex-grow text-lg font-semibold text-center">
        PDF Viewer
      </div>

      {/* Right: Search Box */}
      <div>
        <input
          type="text"
          placeholder="🔍 Search"
          className="border border-gray-300 px-4 py-1 rounded-full w-48 text-sm"
        />
      </div>
    </header>
  );
};

export default Header;
