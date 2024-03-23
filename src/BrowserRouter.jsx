import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageHome from './PageHome';
import PageConnection from './page/Connecter';

export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={PageHome} />
        <Route path="/connection" component={PageConnection} />
      </div>
    </Router>
  );
}
