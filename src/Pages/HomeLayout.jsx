import { Outlet } from "react-router-dom"; // Pour afficher le contenu des sous-routes
import { SideBar } from "../Components";

function HomeLayout() {
  return (
    <div className="bg-gray-200 min-h-screen flex">
      <SideBar /> {/* Affiche le Sidebar à gauche */}
      <div className="ml-48 p-4 flex-1"> {/* Espace à droite pour le contenu */}
        <Outlet /> {/* Affiche le contenu de la sous-route */}
      </div>
    </div>
  );
}

export default HomeLayout;
