import React, { Component } from 'react';
import  {withRouter}  from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        var email="";
        var password="";
        this.state = {value:''};
        this.handleLogin = this.handleLogin.bind(this); 
        this.handleSignup = this.handleSignup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleLogin(){
            this.props.history.push("/wall");

        
    }
    handleSignup(){
        this.props.history.push("/signup");
    }
    handleInputChange(event){
        this.setState({value: event.target.value});
       
    }
    render () {
        return(
        <>
        <section className="login py-5 bg-light">
            <div className="container">
                <div className="row g-0 loginRow">
                    <div className="col-lg-5">
                        <img src="/images/login.jpg" alt="Login" className="img-fluid"/>
                    </div>
                    <div className="col-lg-7 text-center py-5">
                        <h1>LIKIE</h1>
                            <form>
                                <div className="form-row py-4 pt-5">
                                    <div className="offset-1 col-lg-10">
                                        <input type="email" className="loginInp" value = {this.email}
                                         placeholder="email" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="offset-1 col-lg-10">
                                        <input type="password" className="loginInp" value= {this.password} 
                                        placeholder="password"  onChange={this.handleInputChange}/>
                                    </div>
                                </div> 
                                <div className="form-row py-3">
                                    <div className="offset-1 col-lg-10">
                                    <button className="loginButton" onClick={this.handleLogin} >Log In</button>
                                    </div>
                                </div>
                                <div className="form-row py-3">
                                    <div className="offset-1 col-lg-10">
                                        <button className="signupButton" onClick={this.handleSignup}>Sign In</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
  </> )}
}
export default withRouter(Login)
