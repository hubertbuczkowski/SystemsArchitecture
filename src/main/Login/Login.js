import React, { Component } from 'react';
import './style.css';
import {checkLogin} from '../../services/connection';
import Header from '../Header';
import { Link } from 'react-router-dom';




class Login extends Component {

  state = {img: 'https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-07-512.png',
          typeInput: 'password',
          username: "",
          pass: ""};

  hidePass = () => {
    var img = "https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-10-512.png";
    var img2 = 'https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-07-512.png';
    var newState = this.state.typeInput === 'password' ? 'input' : 'password';
    var stateImg = this.state.typeInput === 'password' ? img: img2
    this.setState({ typeInput: newState, img: stateImg });
  }
  login = () => {

    // checkLogin('test', 'test')
    // window.$ = {username: this.state.username, pass: this.state.pass}
    // window.location.href = '/login';
  }
  handlePass = (event) => {
    this.setState({pass: event.target.value});
  }

  handleUname = (event) =>{
    console.log("test")
    this.setState({username: event.target.value});
  }

  render() {
    return (
        <div>
        <Header/>
          <div className="password-wrapper">
          <input id="username-field" className="input" name="username" placeholder="Username" onChange={this.handleUname}/>
          <input id="password-field" type={this.state.typeInput} className="input" name="password" placeholder="Password" onChange={this.handlePass}/>
          <div className="icon-wrapper" onClick={this.hidePass}>
            <img src={this.state.img} alt="" className="icon"/>
          </div>
          <Link  to={{
            pathname: "/Login",
            state: {username: this.state.username, pass: this.state.pass}
          }}><input className="submit" type='submit' value="Login" onClick={this.login}/></Link>
          </div>
        </div>
    );
  }
}

export default Login;
