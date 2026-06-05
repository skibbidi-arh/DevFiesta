import React from 'react'
import '../layouts/verifyemail.css'
const verifyemail = () => {
  return (
  <div className=" framee">
    <div className=' backdrop-blur-sm fantus absolute h-screen w-screen flex justify-center'>
      <div className='carddiv relative h-300'>
            <div className="flex flex-col cardd relative z-50 ">
                <h2 className=' text-2xl text-center '>Email Address</h2>
                <input className='font-black' type="email" id="email" placeholder="Input Email Address" />
                <div>
                  <button className="verify">Verify</button>
                </div>
            </div>
      </div>
    </div>  
  </div>
  )
}

export default verifyemail