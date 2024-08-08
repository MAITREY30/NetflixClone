import React from 'react'
import tailwindConfig from '../tailwind.config'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from './component/Navbar';
import { AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from './component/ProtectedRoute';


const App = () => {
  return  (
  <>
    <AuthContextProvider> 
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<SignUp/>}/>
    <Route path="/Profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
  </Routes>
  </AuthContextProvider> 
  </>
  );
};

export default App