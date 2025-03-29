import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserByGoogle } from '../Features/user/userSlice';

const Toremove = () => {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state) => state.user);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        
        if (userData && userData.auth === "google") {
            // Si l'utilisateur est authentifié via Google, on appelle fetchUserByGoogle
            dispatch(fetchUserByGoogle())
                .catch(error => {
                    console.error("Failed to fetch user data from Google:", error);
                    
                });
        } else {
            // Sinon, on appelle fetchUser pour les autres authentifications (normal)
            dispatch(fetchUser())
                .catch(error => {
                    console.error("Failed to fetch user data:", error);
                });
        }
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome {user.name}</h1>
                    {/* Affiche les infos de l'utilisateur */}
                </div>
            ) : (
                <div>No user found</div>
            )}
        </div>
    );
  
}

export default Toremove