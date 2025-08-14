import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase.js';
import { useSelector } from 'react-redux';

const Browse = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  console.log("User in Browse:", user);

  const handleSingOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='bg-black text-white h-20 flex justify-between'>
      <div>
      <Header />
      </div>

      <div className='flex mt-5'>
        <span className='text-white font-bold text-xl m-2'>{user?.displayName}</span>
        <img src={user?.photoURL} 
        alt="Netflix Logo" className="w-12 h-12 rounded-2xl" />
        <button className='font-bold text-white m-2' onClick={handleSingOut}>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Browse