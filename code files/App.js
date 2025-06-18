import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teaminfo from './teaminfo';
import Supervisorlist from './supervisorlist.jsx';
import Hostingpage from './hostingpage.jsx';
import Addproject from './addproject.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path={'/utsho'} element={<Addproject />}></Route>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
