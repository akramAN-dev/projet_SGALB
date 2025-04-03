import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaFileAlt, FaPencilAlt, FaTrash } from 'react-icons/fa';
import '../index.css';
const TableArchivage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Données temporaires simulant une API
        const tempData = [
            { id: 1, date: '2025-04-02', archive: 'Log_01.zip', statut: 'Terminé', taille: '1.2GB', serveur: 'Server-01', duree: '5min' },
            { id: 2, date: '2025-04-01', archive: 'Log_02.zip', statut: 'En cours', taille: '900MB', serveur: 'Server-02', duree: '3min' },
            { id: 3, date: '2025-03-30', archive: 'Log_03.zip', statut: 'Échoué', taille: '500MB', serveur: 'Server-03', duree: '2min' },
        ];
        setProducts(tempData);
    }, []);

    //status color
    const statusTemplate = (rowData) => {
        let statusClass = '';
    
        switch (rowData.statut) {
            case 'Terminé':
                statusClass = 'bg-[#EBF9F1] text-[#1F9254] px-2 py-1 rounded-lg text-center';
                break;
            case 'En cours':
                statusClass = 'bg-[#FEF2E5] text-[#CD6200] px-2 py-1 rounded-lg';
                break;
            case 'Échoué':
                statusClass = 'bg-[#FBE7E8] text-[#A30D11] px-2 py-1 rounded-lg';
                break;
            default:
                statusClass = 'bg-gray-500 text-white px-2 py-1 rounded';
        }
    
        return <span className={statusClass}>{rowData.statut}</span>;
    };
    

    // Template pour les actions (mise à jour et suppression)
    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
              <button title="Modifier">
                    <FaPencilAlt className='text-[#00407D]'/>
                </button>
                <button title="Supprimer" >
                    <FaTrash className='text-[#FF080F]'/>
                </button>
                <button title="Voir Document">
                    <FaFileAlt className='text-[#735B9D]'/>
                </button>

                {/* <button icon="pi pi-file" className="font-black" title="Voir Document" />
                <button icon="pi pi-pencil" className="" title="Modifier" />
                <button icon="pi pi-trash" className="" title="Supprimer" /> */}
            </div>
        );
    };

    return (
        <div className="card p-4">
          <style>
                {`
                   .custom-table .p-datatable-thead > tr > th {
                    background-color: #5EA2D1;
                    color: white;
                    padding: 10px;
                     }

                    .custom-table .p-datatable-tbody > tr > td {
                        text-align: center;
                    }
                `}
            </style>
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }} className="w-full custom-table" >
                <Column field="date" header="Date"></Column>
                <Column field="archive" header="L’archive"></Column>
                <Column field="statut" header="Statut" body={statusTemplate}></Column>
                <Column field="taille" header="Taille"></Column>
                <Column field="serveur" header="Serveur"></Column>
                <Column field="duree" header="Durée"></Column>
                <Column header="Action" body={actionTemplate} exportable={false}></Column>
            </DataTable>
        </div>
    );
};

export default TableArchivage;
