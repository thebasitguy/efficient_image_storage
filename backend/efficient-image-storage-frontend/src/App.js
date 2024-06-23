import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <LoginButton />
        <LogoutButton />
        <Profile />
        <Switch>
          <PrivateRoute path="/protected" component={ProtectedComponent} />
        </Switch>
      </div>
    </Router>
  );
}

const ProtectedComponent = () => <h3>Protected</h3>;

export default App;
