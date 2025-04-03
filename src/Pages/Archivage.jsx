import React, { useState } from 'react';
import { NavigationElement, TableArchivage, FormulaireArchivage } from '../Components';
import { FaPlus } from 'react-icons/fa';
import { useSidebar } from '../Contex/SideBarContex';

const Archivage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const { collapsed } = useSidebar();

  
  

  return (
    <div>
      {/* Titre et navigation */}
      <NavigationElement path1={"Archive"} path2={"Home"} />

      {/* Conteneur principal */}
      <div className={`bg-white ${collapsed? 'w-[92vw]' : 'w-[82vw]'} p-4 rounded-lg shadow-md`}>
        <div className='flex justify-end mb-4 mr-4'>
          <button 
            className='flex flex-row bg-[#735B9D] p-3 rounded-lg text-white' 
            onClick={openModal}
          >
            <FaPlus className='mt-1 mr-2' /> Créer un archivage manuel
          </button>
        </div>

        <TableArchivage />
      </div>

      {/* Affichage du modal */}
      {isModalOpen && <FormulaireArchivage closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Archivage;
