import { render } from '@testing-library/react';
import React, {Component}from 'react';
import {BrowserRouter as Router,Link,NavLink,Switch,Route} from "react-router-dom";
import Navbar from './Navbar';

class Feed extends Component{
  constructor(props){
    super(props);
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
      active: false,
  }
}
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
}
  render()
  {
  return(
    <>
      <div className="container pt-4">
        <div className="row g-0 feedRow">
          <div className="col-lg-1 my-auto">
            <img src ={this.props.img} className="img-fluid rounded-circle" height="50" width="50" />
          </div>
          <div className="col-lg-11 my-auto">
            <strong className="feedText">{this.props.name}</strong>
            <p>{this.props.username}</p>
          </div>
          <div className="col-lg-12 feedText">{this.props.text}
          </div>
          <div className="col-lg-12">{new Date(). toLocaleString() + ""}</div>
          <div className={this.state.active ? 'col-lg-12 text-center my-md-3 feedText likeButtonAfter': 
          'col-lg-12 text-center my-md-3 feedText likeButton'}  onClick={this.toggleClass}>
            <i className="fas fa-thumbs-up"></i></div>
        </div>
      </div>
    </>
  )}
}

const Wall = () =>{
    return (
    <>
      <Navbar />
      <Feed img="/images/profile.jpg" name="Nikhil Phirke" username="@nikhilphirke" text="Hi,My first Post"/>
      <Feed img="/images/profile.jpg" name="Anagha Phirke" username="@anaghaphirke" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Turpis egestas pretium aenean pharetra magna."/>
      <Feed img="/images/profile.jpg" name="Keshav" username="@keshav123" text="venenatis a"/>
      <Feed img="/images/profile.jpg" name="Raju Narayan" username="@raju" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien."/>
      <Feed img="/images/profile.jpg" name="Madhuri Sali" username="@muddy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu. Tempus egestas sed sed risus pretium quam. Augue eget arcu dictum varius. Lacus viverra vitae congue eu."/>
      <Feed img="/images/profile.jpg" name="Rasika Khatke" username="@realrasika" text="sit amet consectetur adipiscing elit"/>
      <Feed img="/images/profile.jpg" name="Aman Saxena" username="@saxenaaman" text="Hi,Enjoying Cofee"/>
      <Feed img="/images/profile.jpg" name="Ranveer Singh" username="@hithere" text="Magical"/>
      <Feed img="/images/profile.jpg" name="Bill Gates" username="@imbill" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis. Amet nulla facilisi morbi tempus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ac tortor dignissim convallis aenean et tortor at. In vitae turpis massa sed. Dolor sit amet consectetur adipiscing."/>
      <Feed img="/images/profile.jpg" name="writer Vrushabh" username="@iamwriter" text="Empty!!!"/>
  </> )
}
export default Wall