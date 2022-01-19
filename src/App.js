import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDetails from './UserDetails';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={UserDetails} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </main>
  );
}
