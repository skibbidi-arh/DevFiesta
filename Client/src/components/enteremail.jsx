import React from 'react'
import '../layouts/enteremail.css'
const enteremail = () => {
  return (
     <div className="page-container">
        {/* <!-- Navbar --> */}
        <nav className="navbar">
                <div className="brand-logo">
                    <div className="brandname">DevFiesta</div>
                </div>
            
        </nav>

        {/* <!-- Main Content Area - Centered Card --> */}
        <main className="main-content">
            <div className="logincard">
                <h2 className="card-title"></h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email" className="formlabel">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Input Email Address"
                               className="forminput"/>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="verify-button">
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
  )
}

export default enteremail