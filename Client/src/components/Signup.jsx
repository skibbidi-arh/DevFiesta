import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigateto = useNavigate();
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #e6efff;
        }

        .signup-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }

     

        .signup-header .logo-text {
          font-size: 25px;
          font-weight: bold;
          color: #5a69f3;
          margin-left: 10px;
        }

        .signup-box {
          background-color: white;
          margin-top: 15vh;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
          width: clamp(400px,550px,800px);
          height: clamp(500px,600px,800px);
          
        }

        .signup-box h1 {
          color: #5a69f3;
          font-size: 30px;
          font-weight:600;
          margin-bottom: 8px;
        }

        .signup-box p {
          font-size: 15px;
          color: #555;
          margin-bottom: 20px;
        }

        .signup-button {
          border: 1px solid #999;
          background-color: white;
          color: #5a69f3;
          font-weight: 700;
          padding: 10px;
          margin: 10px 0;
          border-radius: 10px;
          width: 100%;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .signup-button:hover {
          background-color: #dfe8ff;
        }

        @media (max-width: 500px) {
          .signup-box {
            padding: 20px 15px;
          }

          .signup-box h1 {
            font-size: 22px;
          }

          .signup-button {
            font-size: 14px;
          }

          .signup-header {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>

      <div className="signup-container">
      

        {/* Main Signup Box */}
        <div className="signup-box">
          <h1>Join DevFiesta</h1>
          <p>Sign In to Explore the World of Hackathon</p>

          <button onClick={()=>{navigateto('/signupform')}} className="signup-button">Signup with Credentials</button>
          <button className="signup-button">Signup with Google</button>
          <button className="signup-button">Signup with Github</button>
          <button className="signup-button">Signup with Facebook</button>
        </div>
      </div>
    </>
  );
}
