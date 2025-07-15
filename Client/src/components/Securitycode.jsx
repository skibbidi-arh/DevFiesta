import React from 'react'
import '../layouts/securitycode.css'

const Securitycode = () => {
  return (
   <div className="framee">
    <main>
      <div className="cardd flex flex-col">
        <h1>Enter Security Code</h1>
        <p className="text-center instruction">We sent a code to your gmail to verify it's you.</p>
        <input type="text" placeholder="Enter code" className="code_input" />

        <div className="buttons">
          <button className="continue">Continue</button>
          <button className="cancel">Cancel</button>
        </div>

        <a href="#" className="resend">Resend Code</a>
      </div>
    </main>
  </div>
  )
}

export default Securitycode