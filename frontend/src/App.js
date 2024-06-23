import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Switch>
          <PrivateRoute path="/protected" component={ProtectedComponent} />
          <PrivateRoute path="/upload" component={Upload} />
        </Switch>
      </div>
    </Router>
  );
}

const ProtectedComponent = () => <h3>Protected</h3>;
const Upload = () => <h3>Upload</h3>;  // You will replace this with your actual upload component

export default App;