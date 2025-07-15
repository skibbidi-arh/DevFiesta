import React, { useEffect, useState } from 'react';
import Logo from '../Images/logo.png'
import logo1 from '../Images/logo1.jpg'
import logo2 from '../Images/logo2.jpg'
import logo3 from '../Images/logo3.jpg'
import logo4 from '../Images/logo4.jpg'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [random,newRandom] = useState(logo1);
  const navigateto = useNavigate();
  const images = [logo1, logo2, logo3, logo4];
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev => {
      const newIndex = (prev + 1) % images.length;
      newRandom(images[newIndex]); // update background image
      return newIndex;
    });
  }, 5000);

  return () => clearInterval(interval);
}, []);

     const dummy = Array.from({ length: 16 }, (_, i) => i);
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
        /* --- CSS Variables for Theming --- */
        :root {
            --primary-color: #4f46e5; /* Indigo */
            --primary-hover: #4338ca;
            --background-color: #eef2ff; /* Light indigo background */
            --card-background: #ffffff;
            --text-dark: #1f2937;
            --text-medium: #6b7280;
            --text-light: #9ca3af;
            --border-color: #d1d5db;
        }

        /* --- General Styles --- */
        body, #root {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            background-color: var(--background-color);
            color: var(--text-dark);
        }

        /* --- Icon Styles --- */
        .mist-icon-lg { width: 2rem; height: 2rem; }
        .mist-icon-md { width: 1.5rem; height: 1.5rem; }
        .mist-icon-sm { width: 1rem; height: 1rem; }
        .mist-icon-color-medium { color: var(--text-medium); }
        .mist-icon-cursor-pointer { cursor: pointer; }


        /* --- Page Layout --- */
        .mist-page-wrapper {
            width: 100%;
        }

        /* --- Header --- */
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
        .mist-login-button {
            background-color: transparent;
            color: var(--primary-color);
            border-color: var(--border-color);
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

        /* --- Hero Section --- */
        .mist-hero-section {
            padding: 2rem;
            width:100%;
            max-width: 100vw;
            margin: 1rem auto;
        }

        .mist-hero-image-placeholder {
            position: relative;
            width: 100%;
            height: 50vh;
            background-color: white;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            color: var(--text-medium);
            font-size: 1.5rem;
        }

        /* --- Projects Section --- */
        .mist-projects-section {
            padding: 2rem;
            max-width: 100vw;
            margin: 0 auto;
        }
        
        .mist-projects-title {
            font-size: 1.75rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        
        .mist-projects-scroller {
            width:95vw;
            display: flex;
            gap: 1.5rem;
            overflow-x: scroll;
            padding-bottom: 1.5rem; /* For scrollbar spacing */
            /* Hide scrollbar */
            scrollbar-width: thin; /* Firefox */
            -ms-overflow-style: auto; /* IE and Edge */
        }
        .mist-projects-scroller::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
        }
        
        .mist-project-circle {
            min-width: 150px;
            height: 150px;
            background-color: #a5b4fc;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="mist-page-wrapper">
        {/* <header className="mist-main-header">
          <nav className="mist-navbar">
            <div className="mist-navbar-left">
              <a href="#" className="mist-brand-logo">
                <img className="w-200 lg:w-[220px]" src={Logo} />

              </a>
              <div className="mist-nav-links">
                <a href="#" className="mist-nav-link">
                  <span>Join</span>
                  <Icon name="chevronDown" className="mist-icon-sm" />
                </a>
                <a href="#" className="mist-nav-link">
                  <span>Host</span>
                  <Icon name="chevronDown" className="mist-icon-sm" />
                </a>
              </div>
            </div>
            <div className="mist-navbar-right">
              <Icon name="search" className="mist-icon-md mist-icon-color-medium mist-icon-cursor-pointer" />
              <button onClick={()=>{navigateto('/loginpage')}} className="mist-header-button mist-login-button">Log in</button>
              <button onClick={()=>{navigateto('/signup')}} className="mist-header-button mist-signup-button">Sign Up</button>
            </div>
          </nav>
        </header> */}

        <main className='flex flex-col'>
          <section className="mist-hero-section">
            <div className="mist-hero-image-placeholder">
                <div className='relative z-10  flex w-full justify-start gap-[2rem] flex-row'>
                <button className=' w-[12rem] font-medium h-[4rem] text-white bg-blue-600 rounded-lg'>For Organizers</button>
                <button className=' border-[2px] w-[13rem] h-[4rem] text-blue-800 font-medium bg-white rounded-lg'>For Participants</button>
                </div> 
                <div className='fixed'>   
              <img className='w-[100vw] h-[52vh] bg-cover z-0' src={random}></img>
              </div>
            </div>
          </section>

          <section className="mist-projects-section">
            <h2 className="mist-projects-title overflow-scroll-auto ">See projects</h2>
            <div className="mist-projects-scroller flex flex-row  ">
                {dummy.map(( keys,index)=>{
                  return <div key={keys} onClick={()=>{navigateto('/projectframe')}} className="mist-project-circle"></div>
                })}
              
        
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
