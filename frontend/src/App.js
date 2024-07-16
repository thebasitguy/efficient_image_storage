import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import './App.css';  // Import the CSS file

const ProtectedComponent = () => <h3>Protected</h3>;
const Upload = () => <h3>Upload</h3>;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="buttons-container">
          <LoginButton />
          <LogoutButton />
        </div>
        <Profile />
        <Routes>
          <Route path="/protected" element={<PrivateRoute component={ProtectedComponent} />} />
          <Route path="/upload" element={<PrivateRoute component={Upload} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
