import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login'
import Wall from './components/Wall'
import Signup from './components/Signup'
import Profile from './components/Profile'

const userData={
  name:"Nikhil Phirke",
  userid:"@nikphirke",
  email:"nik@gmail.com",
  city:"Akola",
  state:"Maharashtra"
}


ReactDOM.render(
  <>
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/wall" component={Wall}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile">
          <Profile profileDisabled={true} buttonText="Back" pageName = "Profile" userData={userData}/>
      </Route>
      <Route path="/edit">
          <Profile  buttonText="Save" pageName= "Edit" userData={userData}/>
      </Route>

    </Switch>
  </Router>
</>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default userData
