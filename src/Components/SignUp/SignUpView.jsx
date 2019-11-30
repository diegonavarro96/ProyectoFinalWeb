import React, { Component } from 'react';
import './style.css';
import { ALPN_ENABLED } from 'constants';
const axios = require('axios')


class SignUpView extends Component {

  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    //super();
    this.state = {
      description: `
      <body>
  <section id="container-form">
    <div id="form">
      <h1>Sign up</h1>
      <div class="input_wrap">
        <input id="email" type="text" name="email" placeholder="email">
      </div>
      <div class="input_wrap">
        <input id="password" type="password" name="password" placeholder="password">
      </div>
      <div class="input_wrap">
        <input id="name" type="text" name="name" placeholder="name">
      </div>
      <div class="input_wrap">
        <input id="age" type="number" name="age" placeholder="age">
      </div>
      <div id="signup_option">or <a href="/SignIn">login!</a></div>
    </div>
  </section>
</body>
      
      `

    }
  }

  sayHello() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    

      ;(async () => {
        const response = await axios.post(
            //Aqui hago el request a heroku a la base de datos
            'https://webproyectofinal.herokuapp.com/users',
            //este es el json Que voy  a mandar
            { "password" : password,
            "email": email,
            "name": name,
            "age": age
             },
            { headers: { 'Content-Type': 'application/json' } }
          )
        
        console.log(response)
        alert("Se creo un nuevo usuario");
      })()
      
  }



      render() {
          return(
              <div>
        
         <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
         <button onClick={this.sayHello}>
             SignUp
        </button>
         </div>
          );
      }
    }

export default SignUpView;