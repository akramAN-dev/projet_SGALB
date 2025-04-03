// components/SideBar.jsx
import React, { useState } from 'react';
import { HomeIcon, FolderIcon, ChartBarIcon, BellIcon, CogIcon, LogoutIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Utilisation de Link
import HpsLogo from "../assets/images/HpsLogo.png";
import { logoutUser } from '../Features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSidebar } from '../Contex/SideBarContex';

const SideBar = () => {
  const { collapsed, setCollapsed } = useSidebar(); // Utilisation du contexte  
  const location = useLocation();
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const logout = async () => {
    console.log("Déconnexion en cours...");

    try {
        // Appelle l'API backend pour la déconnexion
        const response = await fetch("http://localhost:8080/googleStuff/logout", { withCredentials: true }, {
            credentials: "include",
        });
        const data = await response.json();

        // Supprime l'utilisateur du localStorage
        localStorage.removeItem("user");
        dispatch(logoutUser());

        // Rediriger vers la page de logout de Google
        window.location.href = data.logoutUrl;
    } catch (error) {
        console.log("Erreur lors de la déconnexion", error);
    }
};

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${collapsed ? 'w-16' : 'w-48'} relative h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out lg:sticky sm:sticky md:sticky top-0`}>

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
       <Link 
        to="/acceuille" 
       >
       <div className="flex items-center justify-center">
          <img src={HpsLogo} alt="" className={`${!collapsed ? 'w-[70%]' : ''}`}/>
        </div>
        </Link>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-2 mt-8">
      <Link 
        to="/acceuille" 
        className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg ${isActive('/acceuille') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white' : 'text-gray-600 hover:bg-gray-100'} ${collapsed ? '' : 'ml-6'}`}
      >

          <HomeIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Accueil</span>}
        </Link>
        
        <Link 
        to="/archivage" 
        className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg ${isActive('/archivage') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white' : 'text-gray-600 hover:bg-gray-100'} ${collapsed ? '' : 'ml-6'}`}
        >
          <FolderIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Archivage</span>}
        </Link>
        
        <Link 
        to="/reporting" 
        className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg ${isActive('/reporting') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white' : 'text-gray-600 hover:bg-gray-100'} ${collapsed ? '' : 'ml-6'}`}
        >
          <ChartBarIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Reporting</span>}
        </Link>
        
        <Link 
        to="/alerting" 
        className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg ${isActive('/alerting') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white' : 'text-gray-600 hover:bg-gray-100'} ${collapsed ? '' : 'ml-6'}`}
        >
          <BellIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Alerting</span>}
        </Link>
        
        <Link 
        to="/settings" 
        className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg ${isActive('/settings') ? 'bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white' : 'text-gray-600 hover:bg-gray-100'} ${collapsed ? '' : 'ml-6'}`}
        >
          <CogIcon className={`w-5 h-5 ${collapsed ? 'mr-0' : 'mr-3'}`} />
          {!collapsed && <span>Paramètres</span>}
        </Link>
      </nav>
      
      <div className="mb-2">
        <button
          onClick={logout}
          className={`flex items-center ${collapsed ? 'justify-center ml-0' : ''} px-4 py-2 rounded-lg bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] text-white ${collapsed ? '' : 'ml-6'} pointer-events-auto`}
        >
          <LogoutIcon className={`w-6 h-6 ${collapsed ? 'mr-0' : 'mr-3'} text-white`} />
          {!collapsed && <span>Déconnexion</span>}
        </button>
    </div>

    </div>
  );
};

export default SideBar;
