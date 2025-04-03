import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Acceuille, Alerting, Archivage, Error, HomeLayout, Login, Reporting, Settings } from "./Pages";
import ProtectedRoute from "./Components/ProtectedRoute"; // Protection des routes
import GoogleRedirectHandler from "./Components/GoogleRedirectHandler";
import Toremove from "./Components/Toremove";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Thème (modifiable selon ton choix)
import 'primereact/resources/primereact.min.css';  // Styles de base de PrimeReact
import 'primeicons/primeicons.css';  // Icônes de PrimeReact
import { SidebarProvider } from "./Contex/SideBarContex";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />, // Empêche l'accès si non connecté
    children: [
      { path: "/acceuille", element: <Toremove /> },
      { path: "/archivage", element: <Archivage /> },
      { path: "/reporting", element: <Reporting /> },
      { path: "/alerting", element: <Alerting /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth/google/callback", // Route qui récupère et stocke le token
    element: <GoogleRedirectHandler />,
  },
]);

function App() {
  return  <PrimeReactProvider>
            <SidebarProvider>
              <RouterProvider router={router} />
            </SidebarProvider>
          </PrimeReactProvider>;
}

export default App;
