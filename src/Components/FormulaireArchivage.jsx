import React from 'react'

const FormulaireArchivage = ({closeModal}) => {
  return (
    <div className="fixed inset-0 bg-[#00000057] flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
            <h2 className="text-xl font-semibold mb-4">Formulaire d'archivage</h2>

            {/* Formulaire */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nom du fichier :</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Ex: log_01.zip" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Serveur :</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Ex: Server-01" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Taille :</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Ex: 1.2GB" />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={closeModal}
                >
                  Annuler
                </button>
                <button type="submit" className="bg-[#735B9D] text-white px-4 py-2 rounded-md">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default FormulaireArchivage