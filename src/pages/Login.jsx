import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const[rememberLogin , setRememberLogin] = useState(true)
  const[email , setEmail] =useState('')
  const[password , setPassword] =useState('')

  const { user , logIn }=UserAuth();
  const navigate=useNavigate();
 
  const handleFormSubmit=async (e)=>{
   e.preventDefault();

  try{
    await logIn(email , password);
    navigate("/");
  }catch(err){
    console.log(err);
  }
  };
 
 
 
   return (
     <>
     <div className='w-full h-screen'> 
      <img 
      className='hidden sm:block absolute w-full h-full object-cover'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
      alt="///" />
  
   <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
 
     <div className='fixed w-full px-4 py-24 z-20'>
       <div className='max-w-[380px] h-[450px] mx-auto bg-black/80 rounded-lg '>
         <div className='max-w-[320px] mx-10 py-16' >
           <h1 className='text-3xl font-nsans-bold' >Login</h1>
           <form 
           onSubmit={handleFormSubmit} 
           className='w-full flex flex-col py-4'>
             <input 
             className='py-3 my-2 bg-gray-700 rounded '
                   type='email'
                   placeholder='email'
                   autoComplete='email'
                   value ={email}
                   onChange={(e) => setEmail(e.target.value)}
             />
 
             <input className='py-3 my-2 bg-gray-700 rounded '
                   type='password'
                   placeholder='password'
                   autoComplete='current-password'
                   value ={password}
                   onChange={(e) => setPassword(e.target.value)}
             />
 
             <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Login</button>
 
             <div className='flex justify-between items-center text-gray-600'>
               <p>
                 <input type="checkbox" className='mr-1' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)}/> Remember me
               </p>
               <p>Need help?</p>
             </div>
             <p className='my-4'>
              <span className='text-gray-600 mr-2'>New to Netflix?</span>
              <Link to='/signup'>Sign Up</Link>
             </p>
           </form>
         
         </div>
       </div>
     </div>
 </div>
     </>
   )
};

export default Login;