import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

const {user , logOut }=UserAuth();
const navigate = useNavigate();

const handleLogout=async() =>{
 try{
    await logOut();
    navigate("/");
 }catch(err){
    console.log(err);
 }
};


  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
        <Link to='/'>
            <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">netflix</h1>
        </Link>


      {
        user?.email ? (
            <div>
            <Link to="/profile">
                <button className="capatalize pr-4">Profile</button>          
            </Link>

           
                <button onClick={handleLogout} className="capatalize bg-red-600 px-6 py-2 rounded cursor-pointer">Logout</button>          
           

        </div>
        )  :  (
            <div>
            <Link to="/login">
                <button className="capatalize pr-4">login</button>          
            </Link>

            <Link to="/signup">
                <button className="capatalize bg-red-600 px-6 py-2 rounded cursor-pointer">sign up</button>          
            </Link>

        </div>
        )
      }





       


    </div>
  );
};

export default Navbar;