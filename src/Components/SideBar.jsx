// components/SideBar.jsx
import React, { useState } from 'react';
import { HomeIcon, FolderIcon, ChartBarIcon, BellIcon, CogIcon, LogoutIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom'; // Utilisation de Link
import HpsLogo from "../assets/images/HpsLogo.png";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${collapsed ? 'w-16' : 'w-48'} h-screen bg-white border-r border-gray-200 flex flex-col relative transition-all duration-300 ease-in-out`}>
      {/* Toggle button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-12  bg-[#735B9D] rounded-full p-1 border border-gray-200 shadow-md z-10 "
      >
        {collapsed ? (
          <ChevronRightIcon className="w-4 h-4 text-white" />
        ) : (
          <ChevronLeftIcon className="w-4 h-4 text-white" />
        )}
      </button>

      <div className="p-4 border-b border-gray-200 flex">
        <div className="flex items-center justify-center">
          <img src={HpsLogo} alt="" className={`${!collapsed ? 'w-[70%]' : ''}`}/>
        </div>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-2 mt-8">
        <Link 
          to="/" 
          className={`flex items-center ${collapsed ? 'justify-center' : ''} px-4 py-2 rounded-lg ${isActive('/') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ml-6' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <HomeIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Accueil</span>}
        </Link>
        
        <Link 
          to="/archivage" 
          className={`flex items-center ${collapsed ? 'justify-center' : ''} px-4 py-2 rounded-lg ${isActive('/archivage') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ml-6' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <FolderIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Archivage</span>}
        </Link>
        
        <Link 
          to="/reporting" 
          className={`flex items-center ${collapsed ? 'justify-center' : ''} px-4 py-2 rounded-lg ${isActive('/reporting') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ml-6' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <ChartBarIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Reporting</span>}
        </Link>
        
        <Link 
          to="/alerting" 
          className={`flex items-center ${collapsed ? 'justify-center' : ''} px-4 py-2 rounded-lg ${isActive('/alerting') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ml-6' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <BellIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Alerting</span>}
        </Link>
        
        <Link 
          to="/settings" 
          className={`flex items-center ${collapsed ? 'justify-center' : ''} px-4 py-2 rounded-lg ${isActive('/settings') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ml-6' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <CogIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Paramètres</span>}
        </Link>
      </nav>
      
      <div className="p-4">
        <button 
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-center'} w-full px-4 py-2 text-white bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] rounded-lg hover:bg-purple-800`}
        >
          <LogoutIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
