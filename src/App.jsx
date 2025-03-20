import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar'; // Ton Sidebar
// import HomePage from './pages/HomePage'; // Page d'accueil
// import ArchivagePage from './pages/ArchivagePage'; // Page d'archivage
// import ReportingPage from './pages/ReportingPage'; // Page reporting
// import AlertingPage from './pages/AlertingPage'; // Page alerting
// import SettingsPage from './pages/SettingsPage'; // Page paramètres

const App = () => {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen"> {/* Appliquer bg-gris sur toute l'app */}
        <SideBar />
        <div className="ml-48"> {/* Décalage du contenu par la largeur du Sidebar */}
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/archivage" element={<ArchivagePage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/alerting" element={<AlertingPage />} />
            <Route path="/settings" element={<SettingsPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
