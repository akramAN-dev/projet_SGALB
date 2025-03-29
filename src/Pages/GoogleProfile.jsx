    // import React, { useEffect, useState } from 'react';

    // const GoogleProfile = () => {
    //     const [accessToken, setAccessToken] = useState(null);

    //     useEffect(() => {
    //         fetch("http://localhost:8080/auth/profile", {
    //             method: 'GET',
    //             credentials: 'include'
    //         })
    //         .then(response => response.text())
    //         .then(data => {
    //             setAccessToken(data);
    //             localStorage.setItem("user", data); // Stocke le token
    //         })
    //         .catch(error => console.error('Erreur lors de la récupération du token :', error));
    //     }, []);

    //     if (!accessToken) {
    //         return <div>Chargement du profil...</div>;
    //     }

    //     return (
    //         <div>
    //             <h1>Token d'accès Google</h1>
    //             <p>{accessToken}</p>
    //         </div>
    //     );
    // };

    // export default GoogleProfile;
