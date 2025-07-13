import React from 'react'
import '../App'
import logo from "../logo.png"
const landing_page_app = () => {
  return (
    <div className="App">
      <header>
        <div className="logo"><img src={logo} alt="" /></div>
        <nav>
          <div className="dropdown">Join ▼</div>
          <div className="dropdown">Host ▼</div>
          <div className="search">🔍</div>
        </nav>
        <div className="auth-buttons">
          <button className="login" type="button">Log in</button>
          <button className="signup" type="button">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-image">Website Image</div>
          <div className="hero-buttons">
            <button type="button">For Organizers</button>
            <button type="button">For Participants</button>
          </div>
        </section>

        <section className="projects">
          <h2>See projects</h2>
          <div className="scroll-container">
            {[...Array(16)].map((_, i) => (
              <div className="circle" key={i}></div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default landing_page_app