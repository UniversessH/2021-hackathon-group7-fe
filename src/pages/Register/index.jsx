import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Register extends Component {
  state = {
    username: "",
    password: ""
  }
  getUsername = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value
    })
  }

  getPassword = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    })
  }

  RegisterHandler = () => {

    axios({
      method: 'post',
      url: '/api/register',
      data: this.state
    })
      .then(
        response => {
          console.log("注册成功")
        },
        error => {
          console.log(error)
        }
      )
  }

  render() {

    return (
      <div class="box1">
        <div class="center">
          <input type="text" placeholder="请输入账号" onChange={this.getUsername} />
        </div>
        <div class="center">
          <input type="password" placeholder="请输入密码" onChange={this.getPassword} />
        </div>
        <div class="center">
          <button class="button" onClick={this.RegisterHandler}>注册</button>
        </div>
      </div>
    )
  }
}
