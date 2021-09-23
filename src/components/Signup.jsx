import React,{Component} from 'react';
import  {withRouter}  from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this); 
    }
    handleButton(){
        this.props.history.push("/");
    }
    render(){
        return (
            <>
                <section className="login py-5 bg-light">
                    <div className="container">
                        <div className="row g-0 loginRow">
                            
                            <div className="col-lg-12 text-center py-5">
                                <h1>Signup</h1>
                                <form>
                                    <div className="form-row py-1 pt-3">
                                        <div className="offset-1 col-lg-10">
                                            <input type="text" className="loginInp" placeholder="Name"  />
                                        </div>
                                    </div>
                                    <div className="form-row py-1 pt-3">
                                        <div className="offset-1 col-lg-10">
                                            <input type="email" className="loginInp" placeholder="Email"  />
                                        </div>
                                    </div> 
                                    <div className="form-row py-1 pt-3">
                                        <div className="offset-1 col-lg-10">
                                            <input type="tel" className="loginInp" placeholder="Contact"  />
                                        </div>
                                    </div> 
                                    <div className="form-row py-1 pt-3">
                                        <div className="offset-1 col-lg-10">
                                            <input type="password" className="loginInp" placeholder="Password"  />
                                        </div>
                                    </div> 
                                    <div className="form-row py-1 pt-3">
                                        <div className="offset-1 col-lg-10">
                                            <input type="password" className="loginInp" placeholder="Confirm Password"  />
                                        </div>
                                    </div> 
                                    <div className="form-row py-3">
                                        <div className="offset-1 col-lg-10">
                                            <button className="signupButton" onClick={this.handleButton}>Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        
          </> )
    }
    
}
export default withRouter(Signup)