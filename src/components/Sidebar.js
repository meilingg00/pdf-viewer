import React from 'react';

const Sidebar = ({ onSelect }) => {
  const files = ['/example.pdf', '/file2.pdf', '/file3.pdf'];

  return (
    <div className="w-1/5 h-full bg-gray-100 p-4 space-y-4 flex flex-col items-center border-r">
      {/* View toggle button */}
      <button className="w-10 h-10 bg-white border rounded shadow mb-6">
        🔳
      </button>

      {/* File buttons stacked vertically */}
      {files.map((file, index) => (
        <button
          key={index}
          onClick={() => onSelect(file)}
          className="w-full h-20 bg-white border rounded shadow flex items-center justify-center text-sm hover:scale-105 transition"
        >
          file
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
