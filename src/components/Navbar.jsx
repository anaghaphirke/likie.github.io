import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
      return(
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a class="navbar-brand">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item home" >
                      <NavLink to="/" class="nav-link">Home</NavLink>
                    </li>
                    <li class="nav-item contact">
                      <NavLink class="nav-link" activeClassName="active" to = "/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item about" >
                      <NavLink to = "/about"  class="nav-link">About</NavLink>
                    </li>
                    <li class="nav-item signin" >
                      <NavLink to = "/signin" class="nav-link"><i class="fas fa-user"></i>Sign In</NavLink>
                    </li>
                    <li class="nav-item login" >
                      <NavLink to = "/login" class="nav-link"><i class="fas fa-sign-in-alt"></i>Log In</NavLink>
                    </li>
                    <li class="nav-item cart">
                      <NavLink to = "/cart" class="nav-link"><i class="fas fa-shopping-cart"></i></NavLink>
                    </li>
                  </ul>          
                </div>
              </nav>

      );
    }
  }
  export default Navbar;