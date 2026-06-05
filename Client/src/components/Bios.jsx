import React, { useContext } from 'react'
import '../layouts/bios.css'
import { useUser } from '../hooks/AutoAuth';
import { useNavigate } from 'react-router-dom';
const Bios = () => {
  const navigateto = useNavigate()
  const {oldUser,newUser,loading} = useUser();  
  if (loading) {
    return <div>Loading user data...</div>
  }
  console.log('random testing')
  console.log(oldUser);
  return (
      <div className="page-containerr">
        <div className="bio-main-contentt flex flex-col">
            <div className='bg-blue-300 h-70 w-full rand'>This is not done </div>
                <div className="profile-header-section">
                    <div className="profile-header-content">
                       <div className='flex flex-row justify-start w-full lemon     relative top-8'> 
                        <div className="profile-avatarr"></div>
                              <div className="profile-details">
                                   <h1 className="profile-name">{oldUser?.user?.fullname}</h1>
                                       <br></br>
                                   <p className="profile-tagline ">Add your skills,interest,Bios and Address</p>
                                                </div>  
                                        </div>                
                           
                        </div>
                </div>
              
        </div>
          <div className='relative  top-[-1px]  lg:left-[230px] w-full  flex flex-col justify-center align-middle gap-[2px]'>
                 <div style={{paddingTop:10}}  className=' flex justify-center  text-white text-2xl  font-bold w-[260px] h-[60px] bg-green-700 rounded-md '> <a onClick={navigateto('/showproject')} href="#" >Show Project</a></div>
                <div style={{paddingTop:10}} className='flex text-white text-2xl justify-center font-bold w-[260px] h-[60px] bg-blue-400 rounded-md'>  <button onClick={()=>{navigateto('/addproject')}}>Add New Project</button>
                
                  </div>
                                    

                
                            
        </div>
        <div className='bg-white w-full h-[480px]'>
            { <div className="profile-tabss">
                            <button className="tab-button active">PROJECTS</button>
                            <button className="tab-button">HACKATHONS</button>
                </div>
            }   
        </div>
    </div>
  )
}

export default Bios