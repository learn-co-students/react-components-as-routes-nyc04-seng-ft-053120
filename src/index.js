import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Login from './Login';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
