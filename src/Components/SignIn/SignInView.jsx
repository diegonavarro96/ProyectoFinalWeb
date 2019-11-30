import React, { Component } from 'react';
import './style.css';

class SignInView extends Component {
  constructor() {
    super();
    this.state = {
      description: `
      <section id="container-form">
          <div id="form">
              <h1>Login</h1>
              <div class="input_wrap">
                  <input id="email" type="text" name="email" placeholder="email">
              </div>
              <div class="input_wrap">
                  <input id="password" type="password" name="password" placeholder="password">
              </div>
              <button id="login_button">Login</button>
              <div id="signup_option">or <a href="/signup">sign up!</a></div>
          </div>
      </section>
      `
    }
  }
      render() {
        return <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
      }
    }

export default SignInView;