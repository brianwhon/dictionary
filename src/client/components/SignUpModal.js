import React, { Component } from 'react';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
    this.handleUsernameChange = (event) => {
      this.setState({ usernameValue: event.target.value });
    };
    this.handlePasswordChange = (event) => {
      this.setState({ passwordValue: event.target.value });
    };
    this.handleSignup = (event) => {
      event.preventDefault()
      fetch('http://localhost:8080/signup', {
        method: "POST",
        body: JSON.stringify({
          username: this.state.usernameValue,
          password: this.state.passwordValue
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then(() => {
          this.props.closeSignUpModal()
          console.log('success!')
        })
        .catch(err => console.log("error with signUP: ", err))
    }
  }
  render() {
    return (
      <section>
        <button onClick={this.props.closeSignUpModal} >X</button>
        <input
          value={this.state.usernameValue}
          onChange={this.handleUsernameChange}
          id="usernameInput"
          type="text"
          name="username"
          placeholder="Enter desired username..."
        />
        <input
          value={this.state.passwordValue}
          onChange={this.handlePasswordChange}
          id="passwordInput"
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <button onClick={this.handleSignup} id="loginButton">Sign Up</button>
      </section>
    )
  }
}

export default SignUpModal;