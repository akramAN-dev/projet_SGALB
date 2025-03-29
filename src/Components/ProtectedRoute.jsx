import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeLayout } from "../Pages";

const ProtectedRoute = () => {
    const token = localStorage.getItem("user"); // Vérifie si le token est en localStorage
    if (!token) {
        return <Navigate to="/login" replace />; // Redirige vers login si non connecté
    }

    return <HomeLayout />; // Affiche la page demandée si connecté
};

export default ProtectedRoute;
