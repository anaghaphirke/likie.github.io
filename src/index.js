import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Signin from './components/Signin';
import Login from './components/Login';
import Cart from './components/Cart';

const NavPage = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Navbar /> 
    <NavPage />
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//import Navbar from './components/navbar'

