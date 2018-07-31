import React, { Component } from 'react';
import firebase, { auth, provider } from '../../firebase';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'hidden',
      name: '',
      username: '',
      password: '',
      user: null
    }

    this.login = this.login.bind(this);
  }

  toggleLogIn = () => {
    return (
    <div className="wrapper">
      <h3 className="title">Sign In With Google</h3>
      {this.state.user ? 
        <button className="google-login" onClick={(e) => this.logout(e)}>Log Out</button>
        :
        <button className="google-login" onClick={(e) => this.login(e)}>Log In</button>
      }
    </div>
    )
  }

  login(e) {
    e.preventDefault();
    auth.signInWithPopup(provider) 
    .then((result) => {
      console.log(result)
      const user = result.user;
      this.setState({
        user
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  logout = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }


  render() {
    return (
      <div className={this.props.loginClass}>
        <div className='delete-button-container'>
          <button 
            className='delete-button' 
            onClick={this.props.hideLogin}
          >
          x
          </button>
        </div>          
        <form className='sign-up'>
          <h1>Sign Up</h1>
          <input
            type='text'
            placeholder='Name'
          />
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Password'
          />
          <input
            type='text'
            placeholder='Password'
          />
          <button>Submit</button>
        </form>
        <div className='border'></div>
        <form className='login'>
          <h1>Login</h1>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Password'
          />
          <button>Submit</button> 
          {this.toggleLogIn()}
        </form>
      </div>
    )
  }
}

export default Login;