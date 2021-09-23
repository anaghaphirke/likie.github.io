import React, {Component}from 'react';
import {BrowserRouter as Router,Link,NavLink,Switch,Route,withRouter} from "react-router-dom";

class Navbar extends Component{
    constructor(props){
        super(props);
        this.handleProfileButton = this.handleProfileButton.bind(this); 
        this.handleEditButton = this.handleEditButton.bind(this); 
        this.handleLogoutButton = this.handleLogoutButton.bind(this); 
    }
    
    handleProfileButton(){
            this.props.history.push("/profile");
    }

    handleEditButton(){
        this.props.history.push("/edit");
    }
    handleLogoutButton(){
        this.props.history.push("/");
    }
    render()
    {
        return(
            <>
                <Router>
                    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary" >
                        <div onClick={this.handleProfileButton} className="navbar-brand"><img src ="/images/profile.jpg" className="img-fluid rounded-circle" 
                            height="50" width="50" />
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item" >
                                    <div onClick={this.handleEditButton} className="nav-link navMenu">
                                        <i className="fas fa-user-edit"></i></div>
                                </li>
                                <li className="nav-item">
                                    <div onClick={this.handleLogoutButton} className="nav-link navMenu">
                                        <i className="fas fa-sign-out-alt"></i></div>
                                </li>
                            </ul>          
                        </div>
                    </nav>
                </Router>
            </>
        )} 
}
export default withRouter(Navbar)