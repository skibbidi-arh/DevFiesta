import React, { useContext } from 'react';
import { useUser } from '../hooks/AutoAuth';
import { useNavigate } from 'react-router-dom';

// This component has been updated to exactly match the new image provided.
export default function ProfileInfo() {
  const navigateto = useNavigate();
    const {oldUser,newUser} = useUser();
    console.log('THis isnt working')
    console.log(oldUser)
  return (
    <>
      <style>{`
        /* --- CSS Variables for Theming --- */
        :root {
            --primary-blue: #3182ce;
            --dark-teal: #003e54;
            --background-color: #f7fafc;
            --card-background-color: #ffffff;
            --text-dark: #2d3748;
            --text-medium: #718096;
            --border-color: #e2e8f0;
            --sidebar-active-bg: #edf2f7;
        }

        /* --- General Styles --- */
        body, #root {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            margin: 0;
            color: var(--text-dark);
        }

        /* --- Page Layout --- */
        .varia-page-wrapper {
            width: 100%;
        }

        /* --- Main Header --- */
        .varia-main-header {
            background-color:white;
            border-bottom: 1px solid var(--border-color);
            padding: 0 2rem;
        }

        .varia-navbar {
            background-color:white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100px;
            max-width: 1600px;
            margin: 0 auto;
        }

        .varia-brand-logo {
            color: var(--text-dark);
            font-weight: 700;
            font-size: 1.25rem;
            letter-spacing: 1px;
        }
        
        /* --- Settings Title Bar --- */
        .varia-settings-title-bar {
            background-color: var(--dark-teal);
            color: white;
            height:clamp(100px,250px,500px);
        }

        .varia-settings-title-content {
            padding: 1.5rem 2rem;
            max-width: 1600px;
            margin: 0 auto;
        }

        .varia-settings-title-content h1 {
            font-size: 4rem;
            font-weight: 600;
            margin: 0;
            text-align:start;
            color:white;
        }
        
        /* --- Main Content Grid Layout --- */
        .varia-main-content {
            background-color:#E9F0FF;
            display: grid;
            grid-template-columns: 1fr;
            gap: 7.1rem;
            max-width: 1600px;
            margin: 3rem 30rem;
            padding: 2rem;
        }

        @media (min-width: 1024px) {
            .varia-main-content {
                grid-template-columns: 240px 1fr; 
            }
        }
        @media (max-width: 1224px) {
            .varia-main-content {
                grid-template-columns: -50px 1fr; 
                margin:0px;
            }
        }    


        /* --- Sidebar Navigation --- */
        .varia-sidebar-nav {
            margin-left:2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            height:70vh;
            width:20rem;
             border-width:0.1rem;
             border-color:silver;
        }
        
        .varia-sidebar-section {

            display: flex;
            flex-direction: column;
            gap: 0.5rem;
           
        }

        .varia-sidebar-section-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: var(--text-medium);
            text-transform: uppercase;
            padding: 0 0.75rem;
        }

        .varia-sidebar-link {
            text-decoration: none;
            color: var(--primary-blue);
            font-weight: 500;
            font-size: 1rem;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
        }
        .varia-sidebar-link.varia-active {
            background-color: var(--sidebar-active-bg);
            color: var(--text-dark);
            font-weight: 600;
        }
        .varia-sidebar-link:hover {
            background-color: var(--sidebar-active-bg);
        }

        /* --- Profile Form Section --- */
        .varia-profile-form-card {
            border-radius: 6px;
            padding: 2rem;
            border: 1px solid var(--border-color);
            height:70vh;
        }

        .varia-form-header h1 {
            font-size: 4rem;
            margin: 0 0 0.25rem 0;
            font-weight: 600;
            color: var(--primary-blue);
        }

        .varia-form-header p {
            font-size: 1rem;
            color: var(--text-medium);
            margin: 0 0 2rem 0;
        }
        
        .varia-profile-upload-section {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--border-color);
        }

        .varia-profile-image {
            width: 10rem;
            height: 10rem;
            background-color: #e9ecef;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            /* In a real app, this would be an <img> tag */
        }
        
        .varia-upload-button {
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--primary-blue);
            background: none;
            border: none;
            cursor: pointer;
        }

        /* --- Form Inputs and Groups --- */
        .varia-form-fields {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .varia-form-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
            .varia-form-row {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .varia-form-group {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            width: 100%;
        }
        
        .varia-form-group label {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-dark);
            
        }
        
        .varia-form-input {
            border: 1px solid var(--border-color);
            border-radius: 4px;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            width: 100%;
            box-sizing: border-box;
            background-color:#ffffff;
        }

        .varia-input-with-prefix {
            display: flex;
            align-items: center;
            background-color:white;
        }
        .varia-input-with-prefix span {
            padding: 0.5rem 0.75rem;
            background-color: white;
            border: 1px solid var(--border-color);
            border-right: none;
            border-radius: 4px 0 0 4px;
            color: var(--text-medium);
            font-size: 0.875rem;

        }
        .varia-input-with-prefix input {
            border-radius: 0 4px 4px 0;
            background-color:white;
        }

        .varia-form-textarea {
            min-height: 70px;
            resize: vertical;
        }

        .varia-form-section-heading {
            font-size: 2rem;
            font-weight: 600;
            margin: 1.5rem 0 0 0;
        }
        
        /* --- Floating Help Button --- */
        .varia-help-button {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background-color: var(--dark-teal);
            color: white;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            cursor: pointer;
        }
          .varia-form-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2.5rem;
            padding-top: 2.5rem;
            border-top: 1px solid var(--border-color);
        }

        .varia-action-button {
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
        }
          .varia-save-button {
            background-color: var(--primary-blue);
            color: white;
            
        }
        .varia-save-button:hover {
            background-color: #2b6cb0;
        }

        .varia-cancel-button {
            background-color:silver;
            color: white;
        }
        .varia-cancel-button:hover {
            background-color: #2d3748;
        }    
      `}</style>
      <div className="varia-page-wrapper">
        <header className='varia-main-header'>
        </header>

        <div className='varia-settings-title-bar'>
          <div className="varia-settings-title-content">
            <h1>Edit your settings</h1>
          </div>
        </div>
        
        <main className='varia-main-content'>
          <aside className='varia-sidebar-nav'>
            <div className="varia-sidebar-section">
              <h3 className="varia-sidebar-section-title">Portfolio</h3>
              <a href="#" className="varia-sidebar-link varia-active">Profile info</a>
            </div>
            <div className="varia-sidebar-section">
              <h3 className="varia-sidebar-section-title">Hackathon Recommendations</h3>
              <a href="#" className="varia-sidebar-link">Preferences & Eligibility</a>
            </div>
            <div className="varia-sidebar-section">
              <h3 className="varia-sidebar-section-title">Account Management</h3>
              <a href="#" className="varia-sidebar-link">Email notifications</a>
              <a href="#" className="varia-sidebar-link">Account & privacy</a>
              <a onClick={()=>{navigateto('/changepassword')}} href="#" className="varia-sidebar-link">Password</a>
            </div>
          </aside>

          <div className='varia-profile-form-card'>
            <header className='varia-form-header'>
              <h1>Profile info</h1>
              <p>This information will appear on your public Devpost profile.</p>
            </header>

            <section className='varia-profile-upload-section'>
              <div className='varia-profile-image'></div>
              <button className='varia-upload-button'>Upload Photo</button>
            </section>

            <form>
              <div className='varia-form-fields'>
                <div className='varia-form-row'>
                  <div className='varia-form-group'>
                    <label htmlFor='Full_name'>Fullname</label>
                    <input type='text' id='Fullname' className='varia-form-input' defaultValue={oldUser?.user?.fullname} />
                  </div>
                  <div className='varia-form-group '>
                    <label htmlFor='last_name'>Email</label>
                    <input type='text' id='Email' className='varia-form-input' defaultValue={oldUser?.user?.email} />
                  </div>
                </div>
                
                <div className='varia-form-group'>
                  <label htmlFor='bio'>Bio</label>
                  <textarea id='bio' className='varia-form-input varia-form-textarea'></textarea>
                </div>
                
                <h2 className='varia-form-section-heading'>Social</h2>
                
                <div className='varia-form-row'>
                  <div className='varia-form-group'>
                    <label htmlFor="github">GitHub</label>
                    <div className="varia-input-with-prefix">
                      <span className='h-[3rem] w-[3-rem] font-normal relative top-[-4px]'>@</span>
                      <input type='text' id="github" className='varia-form-input' />
                    </div>
                  </div>
                  <div className='varia-form-group'>
                    <label htmlFor="linkedin">LinkedIn</label>
                    <div className="varia-input-with-prefix">
                      <input type='text' id="linkedin" placeholder="e.g., https://www.linkedin.com/in/yourname" className='varia-form-input' />
                    </div>
                  </div>
                </div>
              </div>
               <div className='varia-form-actions'>
                <button type='submit' className='varia-action-button varia-save-button'>Save changes</button>
                <button type='button' className='varia-action-button varia-cancel-button'>Cancel</button>
              </div>
            </form>
          </div>
        </main>
        <button className="varia-help-button">?</button>
      </div>
    </>
  );
}