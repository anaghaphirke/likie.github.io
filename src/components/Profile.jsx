import React,{ Component } from 'react';
import  {withRouter}  from 'react-router-dom';
import userData from '../index';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {value: this.props.default};
        this.handleButton = this.handleButton.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this); 
    }
    
    handleButton(){
        this.props.history.push("/wall");
    }
  
    handleInputChange(event){
        this.setState({value: event.target.value});
        console.log("value data",event.target.value,event.target.name)
            userData[event.target.name] = event.target.value
            console.log("userData",userData)
    }

    render() {
    return (
    <>
        <section className="login py-5 bg-light">
            <div className="container">
                <div className="row g-0 loginRow">        
                    <div className="col-lg-12 text-center">
                        <h1>{this.props.pageName}</h1>
                    </div> 
                    <div className="col-lg-12 text-center">
                        <img src ="/images/profile.jpg" className="img-fluid rounded-circle" 
                                height="150" width="150" />
                    </div>
                    <div className="col-lg-12 text-center pt-3 py-1"> 
                        <label className="feedText">Name : </label>
                        <input type="text" className="profileInp" name="name" defaultValue={this.props.userData.name} onChange={this.handleInputChange}
                        disabled={this.props.profileDisabled} />
                    </div>
                    <div className="col-lg-12 text-center pt-3 py-1"> 
                        <label className="feedText">Username : </label>
                        <input type="text" className="profileInp" name ="userid" defaultValue={this.props.userData.userid} onChange={this.handleInputChange}
                        disabled={this.props.profileDisabled} />
                    </div>
                    <div className="col-lg-12 text-center pt-3 py-1"> 
                        <label className="feedText">Email : </label>
                        <input type="email" className="profileInp" name="email" defaultValue={this.props.userData.email} onChange={this.handleInputChange}  disabled={this.props.profileDisabled}/>
                    </div>
                    <div className="col-lg-6 text-center pt-3 py-1"> 
                        <label className="feedText">City : </label>
                        <input type="text" className="profileInp" name = "city" defaultValue={this.props.userData.city} onChange={this.handleInputChange} disabled={this.props.profileDisabled} />
                    </div>
                    <div className="col-lg-6 text-center pt-3 py-1"> 
                        <label className="feedText">State : </label>
                        <input type="text" className="profileInp" mname="state" defaultValue={this.props.userData.state} onChange={this.handleInputChange} disabled={this.props.profileDisabled} />
                    </div>
                    <div className="col-lg-12 text-center pt-5 py-3">
                        <button className="loginButton" onClick={this.handleButton}>{this.props.buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
  </> )}
}
export default withRouter(Profile)