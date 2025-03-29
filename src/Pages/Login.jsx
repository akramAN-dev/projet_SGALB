import React, { useEffect, useState } from 'react'
import { GoogleBoutton } from '../Components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Features/user/userSlice'
import MiscrosoftBoutton from '../Components/MicrosoftBoutton'

const initialState = {
    email:'',
    motDePasse : ''
}
const Login = () => {
  const [values , setValues]=useState(initialState)
  const {user,isLoading}=useSelector((store)=>store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>
    {
        if(user){
            setTimeout(()=>{
                navigate('/')
            },1000)
        }
    },[user,navigate])
    const handelChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values,[name]:value})
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        const {email,motDePasse}=values;
        if(!email,!motDePasse)
        {
            console.log("SVP REMPLIR TOUT LES CHAMPS"); // toast a faire apres
            return
        }
        dispatch(loginUser({email:email,motDePasse:motDePasse}))
    }
  return (
    <div className='bg-gradient-to-tr from-[#735B9D] to-[#5EA2D1] w-screen h-screen'>Login
        <div className='bg-white w-[45%] right-0 absolute m-10 mt-11 p-5 rounded-sm'>
        <form onSubmit={onSubmit}>
            
            <input type="email" name="email" onChange={handelChange} value={values.email} className='border-2 border-black'/>
            
            <input type="password" name="motDePasse" onChange={handelChange} value={values.motDePasse} className='border-2 border-black'/>
            <button className="btn border-2 border-black" disabled={isLoading}> {isLoading?"loading..." :"Login"}</button>
           
        </form>
        <GoogleBoutton/>
        <MiscrosoftBoutton/>
        </div>
    </div>
  )
}

export default Login