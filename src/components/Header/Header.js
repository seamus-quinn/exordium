import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/exordium-logo.png';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="title-logo">
          <img className="logo" src={logo} alt="exordium logo"/>
        </div>
        <div className="signin-container">
          <button className="log-in-button" onClick={this.props.toggleLogin}>Sign Up/Login</button>
        </div>
      </header>
    )
  }
}

export default Header;