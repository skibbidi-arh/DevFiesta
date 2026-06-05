import React, { useState } from 'react'
import Logo from '../Images/logo.png'
import hackathonbg from '../Images/hackathonbg.jpg'
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { useContext,createContext } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useUser } from '../hooks/AutoAuth';
import axios from 'axios';
const Navbar = () => {
    const Logout = async ()=>{
          const response =  await axios.delete('/backend/logout')
          console.log(response);
          newUser(null)
          
          navigateto('/');
    }
  const checkIfLoggedin = () => {
      if (oldUser) {
        navigateto('/hostingpage');
      } else {
        alert('You need to be logged in first');
        navigateto('/loginpage');
      }
};
    const {oldUser,newUser} = useUser();
    const navigateto = useNavigate();
    const [oldValue,newValue] = useState(1);
    const [showJoinDropdown, setShowJoinDropdown] = useState(false);
    const [showHostDropdown, setShowHostDropdown] = useState(false);
       const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const Icon = ({ name, className }) => {
    
    const icons = {
      logo: (
        <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3.366 6.174A.75.75 0 003 6.828v10.344a.75.75 0 00.366.654l8.256 4.572a.75.75 0 00.756 0l8.256-4.572a.75.75 0 00.366-.654V6.828a.75.75 0 00-.366-.654L12.378 1.602zM12 15.182a3.182 3.182 0 110-6.364 3.182 3.182 0 010 6.364z" />
        </svg>
      ),
      search: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      chevronDown: (
         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      ),
    };
    return icons[name] || null;
  };
  return (
    <>
    <style>{` 
           .mist-main-header {
            width:100%;
            background-color:#8CA9F3;
            border-bottom: 1px solid var(--border-color);
            padding: 0 ;
            height:6rem;
            
            
        }

        .mist-navbar {
            display: flex;
            align-items:center;
            justify-content: space-between;
            height: 6rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .mist-navbar-left, .mist-navbar-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            font-size:30px;
        }
        .mist-brand-logo{
            height:6rem;
            display:flex;
            align-items:center;
            padding-top:1.25rem;
        }

        .mist-nav-links {
            display: none; /* Hidden on mobile */
        }
        @media (min-width: 768px) {
            .mist-nav-links {
                display: flex;
                gap: 1.5rem;
            }
        }

        .mist-nav-link {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: var(--text-dark);
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
        }
        .mist-nav-link:hover {
            color: var(--primary-color);
        }

        .mist-header-button {
            padding: 0.2rem 1rem;
            border-radius: 8px;
            font-weight: 400;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.2s;
        }

        .mist-login-button:hover {
            border-color: var(--primary-color);
        }
        .mist-signup-button {
            background-color: var(--primary-color);
            color: white;
        }
        .mist-signup-button:hover {
            background-color: var(--primary-hover);
        }
        `}</style>
    <div> <header className="mist-main-header">
              <nav className="mist-navbar">
                <div className="mist-navbar-left">
                  <a href="" className="mist-brand-logo">
                    <img onClick={()=>{navigateto('/')}} className="w-200 lg:w-[220px]" src={Logo} />
    
                  </a>
                  <div className="mist-nav-links">
                    <a
                        onClick={() => setShowJoinDropdown(prev => !prev)}
                        className="mist-nav-link relative cursor-pointer"
                        >
                        <span className='text-white'>Join</span>
                        <Icon name="chevronDown" className="w-4 h-4" />

                        {showJoinDropdown && (
                            <div className="absolute  top-full m-2 left-0 bg-white shadow-md border  z-50 w-[200px]">
                            <ul className="flex flex-col h-[8rem]  text-sm text-blue-800">
                                <li className="hover:bg-gray-100 px-[4px] py-[2px] cursor-pointer text-2xl">Hackathons</li>
                                <li className="hover:bg-gray-100 px-[4px] py-[2px] cursor-pointer text-2xl">Events</li>
                                <li className="hover:bg-gray-100 px-[4px] py-[2px] cursor-pointer text-2xl">Communities</li>
                            </ul>
                            </div>
                        )}
                        </a>
                    <a href="#"  onClick={() => setShowHostDropdown(prev => !prev)}
                        className="mist-nav-link relative cursor-pointer">
                      <span className='text-white'>Host</span>
                      <Icon name="chevronDown" className="w-[1rem] h-[1rem]" />
                       {showHostDropdown && (
                            <div className="absolute  top-full m-2 left-0 bg-white shadow-md border  z-50 w-[200px]">
                            <ul className="flex flex-col h-[8rem]  text-sm text-blue-800">
                                <li onClick={checkIfLoggedin} className="hover:bg-gray-100 cursor-pointer text-[20px]">Host a Hackathon</li>
                            </ul>
                            </div>
                        )}
                    </a>
                  </div>
                </div>
                {oldUser===null?(    <div className="mist-navbar-right">
                  <HiSearch className='min-w-[30px]' size={30} color="gray" />
                  <button onClick={()=>{navigateto('/loginpage')}} className="hover:opacity-70 text-white  bg-blue-500 rounded-2xl w-32 h-15 font-medium">Log in</button>
                  <button onClick={()=>{navigateto('/signup')}} className="hover:opacity-70 font-medium text-white bg-blue-500 rounded-2xl w-32 h-15">Sign Up</button>
                </div>):( <div className="mist-navbar-right">
                  <HiSearch className='min-w-[30px]' size={30}  />
                  <FaBell className='min-w-[30px]' size={30} color="silver"/>
  <div className="relative inline-block">
        <img
          onClick={() => setShowProfileDropdown(prev => !prev)}
          className=" bg-black w-[30px] min-w-[30px] h-[30px] rounded-full cursor-pointer"
          src={Logo}
          alt="profile"
        />
        {showProfileDropdown && (
          <div className="absolute top-full mt-2 right-0 bg-white shadow-md border z-50 w-[200px]">
            <ul className="flex flex-col text-sm text-blue-800">
              <li onClick={()=>{navigateto('/Bios');setShowProfileDropdown(false)}} className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-2xl">portfolio</li>
              <li onClick={()=>{navigateto('/profileinfo');setShowProfileDropdown(false)}}  className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-2xl">Settings</li>
               <li onClick={()=>{setShowProfileDropdown(false);Logout()}}  className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-2xl">Logout</li>
            </ul>
          </div>
        )}
</div>
                  
                    
                </div>)}
               
              </nav>
            </header></div>
    </>        
  )
}

export default Navbar