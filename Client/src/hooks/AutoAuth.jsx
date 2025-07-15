// AutoAuth.jsx
import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const AutoAuth = ({ children }) => {
  const [oldUser, newUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get('/backend/checkvalid', { withCredentials: true });
        if (response.data) {
          newUser({ user: response.data });
        } else {
          newUser(null);
        }
      } catch {
        newUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ oldUser, newUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default AutoAuth;
