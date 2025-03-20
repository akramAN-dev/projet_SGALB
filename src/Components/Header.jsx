import React from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <BellIcon className="h-6 w-6 text-gray-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-red-600 font-semibold">admin</span>
          <div className="h-8 w-8 rounded-full bg-purple-700 flex items-center justify-center text-white">
            <span>A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;