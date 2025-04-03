import React, { useEffect, useState } from 'react'
import { GoogleBoutton } from '../Components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../Features/user/userSlice'
import MiscrosoftBoutton from '../Components/MicrosoftBoutton'
import HpsLogo from '../assets/images/HpsLogo.png'
import loginSwitch from '../assets/images/loginSwitch.png'

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
    <div className='bg-gradient-to-tr from-[#735B9D] to-[#5EA2D1] w-screen h-screen'>
        <div className="absolute w-full h-full hidden lg:block">
            <img src={loginSwitch} alt="" className="w-full h-full object-cover" />
        </div>

        <div className='bg-white lg:w-[41%] w-[70%] absolute lg:m-10 mt-11 p-5 rounded-sm h-[80%] 
               left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:-translate-x-0'>
    {/* HPSlOGO */}
            <div className='w-full flex justify-center lg:mb-8 mt-2.5'>
                <img src={HpsLogo} alt="" width={150} />    
            </div>
            <div className='lg:absolute lg:top-0 lg:m-[68px] lg:ml-65 lg:text-[10px] lg:text-[#735B9D] text-[#5EA2D1] font-bold text-center mt-2.5 text-xl'>
                Login
            </div>
            <div className=" flex justify-center">
                <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-[70%] max-w-md mx-auto">
                    <div className="flex flex-col">
                        <label htmlFor="email" className='text-[#735B9D] font-bold'>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            onChange={handelChange} 
                            value={values.email} 
                            className="border-2 border-[#735B9D] p-1"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="motDePasse" className='text-[#735B9D] font-bold'>Mot de passe</label>
                        <input 
                            type="password" 
                            name="motDePasse" 
                            id="motDePasse"
                            onChange={handelChange} 
                            value={values.motDePasse} 
                            className="border-2 border-[#735B9D] p-1"
                        />
                    </div>

                  
                    <div className='w-full flex justify-center'>
                    <button className="btn bg-gradient-to-r from-[#735B9D] to-[#5EA2D1] mt-2 text-white p-2 w-[55%] flex justify-center" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </div>
                
                </form>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <span className='border w-[30%] ml-1 border-[#735B9D]'></span>
                <div className='pl-2 pr-2 text-[#735B9D]'>ou</div>
                <span className='border w-[30%] border-[#735B9D]'></span>
            </div>

            <div className='w-full flex flex-col items-center space-y-3 mt-5'>
                <div className='lg:w-[45%] w-[55%]'>
                    <GoogleBoutton />
                </div>
                <div className='lg:w-[45%] w-[55%]'>
                    <MiscrosoftBoutton />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login