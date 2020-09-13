import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/login">Login</Link>
    </div>
  );
};

let About = () => {
  return (
    <div>
      <h1> This is my about component! </h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>

        <div>
          <input type="text"
          name="username"
          placeholder="Username" />
          <label htmlFor="username">
            Username
          </label>
        </div>

        <div>
          <input type="password"
          name="password"
          placeholder="Password" />
          <label htmlFor="password">
            Password
          </label>
        </div>

        <input type="submit"
        value="Login" />
      </form>
    </div>
  )
}


ReactDOM.render(
 ( <Router> 
   <div>
     {/* if you wantit to show up everwhere have no exact  other wise use exact */}
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);
