import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleRedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/auth/profile", {
            method: "GET",
            credentials: "include", // Inclure les cookies de session si nécessaire
        })
        .then(response => response.text())
        .then(token => {
            if (token) {
                // Stocker le token dans localStorage dès la connexion
                localStorage.setItem("user", JSON.stringify({ accessToken: token,auth:'google' }));


                // Rediriger vers la page d'accueil
                navigate("/acceuille");
            } else {
                console.error("Erreur : Aucun token reçu !");
                navigate("/login"); // Si échec, rediriger vers /login
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération du token :", error);
            navigate("/login");
        });
    }, [navigate]);

    return <h2>Authentification en cours...</h2>;
};

export default GoogleRedirectHandler;
