import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import customFetch from "../../utils/axios";
import { removeUserFromLocalStorage } from "../../localstorage";
import { jwtDecode } from "jwt-decode";

const getUserFromLocalStorage = () =>
{
    const result = localStorage.getItem("user");
    const user = result?JSON.parse(result) : null;
    return user;
}

export const addUserToLocalStorage = (user) => 
{
    localStorage.setItem("user",JSON.stringify(user))
}

const initialState = {
    isLoading : false , 
    user:null,
    googleUser:null,
    isFinalUser: false,
    isGoogleLogin: false,
    profile: null,
}

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(user,thunkAPI)=>
    {
        try{
            const resp = await customFetch.post("/auth/login",user);
            return resp.data;
        }catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    })

    export const fetchUserByGoogle = createAsyncThunk(
        "user/fetchUserByGoogle",
        async (_, thunkAPI) => {
            try {
                const resp = await customFetch.get('/googleStuff/user-info', { withCredentials: true });
                console.log(resp);
                return resp.data;  // Ici, on renvoie les données de l'utilisateur récupérées
            } catch (error) {
                return thunkAPI.rejectWithValue(error.response?.data?.msg || "Failed to fetch user data");
            }
        }
    );
    export const fetchUser = createAsyncThunk(
        "user/fetchUser",
        async (_, thunkAPI) => {
            const userId = user ? user.userId : null; // Get userId from localStorage

            if (!userId) {
                return thunkAPI.rejectWithValue("User ID not found in localStorage");
            }
            try {
                const resp = await customFetch.get('/api/v1/utilisateur/user-info', { userId }, { withCredentials: true });
                console.log(resp);
                return resp.data;  // Ici, on renvoie les données de l'utilisateur récupérées
            } catch (error) {
                return thunkAPI.rejectWithValue(error.response?.data?.msg || "Failed to fetch user data");
            }
        }
    );

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        logoutUser:(state)=>{
            state.user=null;
            removeUserFromLocalStorage();   
            // dispatch({ type: "user/logout" });
        },
        setGoogleLogin(state) {
            state.isGoogleLogin = true;  // Définit que l'utilisateur a utilisé Google pour se connecter
        },
        setNormalLogin(state) {
            state.isGoogleLogin = false;  // Définit que l'utilisateur a utilisé une connexion normale
        }

    },
    extraReducers: (builder) => {
             builder
                .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                })
                .addCase(loginUser.fulfilled, (state, { payload }) => {
                    const { accessToken } = payload;
                    const decodedToken = jwtDecode(accessToken);
                    state.isLoading = false;
                    state.user = {
                    nom: decodedToken.sub,
                    roles: decodedToken.scope,
                    userId: decodedToken.userId,
                    token: accessToken,
                    };
                    addUserToLocalStorage(state.user);
                    // toast.success(`Welcome Back ${state.user.nom}`);
                    console.log(`Welcome Back ${state.user.nom}`);
                    // Mettre à jour isFinalUser en fonction du rôle
                    state.isFinalUser = state.user.roles.includes("USER");
                })
                .addCase(loginUser.rejected, (state) => {
                    state.isLoading = false;
                    // toast.error("Invalid credentials");
             })
             .addCase(fetchUserByGoogle.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserByGoogle.fulfilled, (state, { payload }) => {
                
                state.isLoading = false;
                state.user = payload;   
                
            })
            .addCase(fetchUserByGoogle.rejected, (state) => {
                state.isLoading = false;
                console.error("Error fetching user data");
            });


     },
})


export const {logoutUser,setGoogleLogin, setNormalLogin}=userSlice.actions
export default userSlice.reducer
