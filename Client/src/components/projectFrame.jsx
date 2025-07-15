import React from 'react'
// import '../App.css'
import Deadline from '../Images/image.png'

const projectFrame = () => {
  return (
<div className='projectFrame'>
    <div>
    <nav>
    <div className=' w-full flex flex-col gap-15 bg-blue-500  '>
      <h2 className='flex  text-[65px] align-top justify-center font-medium text-white '>AMAZON WEB Add-ons HACKATHON </h2>
    <ul className="nav-links">
      <a href='#'>Overview</a>
      <a href='#'>Updates</a>
      <a href='#'>Rules</a>
      <a href='#'>Criteria</a>
      <a href='#'>Prizes</a>
    </ul>
    </div>
  </nav>
  </div>
  <div className="containers">
    <div className="left-panel">
          <div className=" project-name card  ">AMAZON WEB Add-ons HACKATHON </div>
          <div className="motto">Code. Connect. Grow your Business</div>
          <div className='button-participate'>
            <button className="join-btn">Join Hackathon</button>
              <div className="participate">
                <h2 className='text-2xl font-black '>Who can participate?</h2>
                <ul className='text-2xl'>
                  <li>-Above legal age based on country </li>
                  <li>-Above requirements to be met  </li>
                </ul>
              </div>
        
          </div>
      
    </div>

    <div className="right-panel">
      <div className="info-box card">
        <img className='w-full h-full' src={Deadline}></img>
      </div>
    </div>
  </div>
</div>  )
}

export default projectFrame