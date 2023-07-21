import { Component } from "react";
import './index.css'

class LoginForm extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errMsg: ''
  }

  onChangeInput = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSuccess = () => {
    const { history } = this.props
    history.replace('/')
  }

  onFailure = (data) => {
    this.setState({ errMsg: data.error_msg })
  }

  submitForm = async event => {
    event.preventDefault()
    const { username, password } = this.state
    const userDetails = { username, password }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccess()
    } else {
      this.onFailure(data)
    }
    console.log(data);

  }

  render() {
    const { username, password, errMsg } = this.state
    return (
      <div className="login-form-bg-container">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login" className="website-login-image" />
        <form className="login-form" onSubmit={this.submitForm}>
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="website-logo-image" />
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input id='username' type="text" name="username" value={username} placeholder="USERNAME" onChange={this.onChangeInput} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input id='password' type="password" name="password" value={password} placeholder="PASSWORD" onChange={this.onChangeInput} />
          </div>
          <button type="submit" className="login-button">Login</button>
          {errMsg !== '' && <p className="error-message">*{errMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm