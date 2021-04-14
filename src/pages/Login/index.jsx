import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Login extends Component {
  state = {
    user: "",
    password: ""
  }
  
  getUsername = (event) => {
    console.log(event.target.value);
    this.setState({
      user: event.target.value
    })
  }

  getPassword = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    })
  }

  loginHandler = () => {

    axios({
      method: 'post',
      url: "/api/login",
      data: this.state,
    })
      .then(
        response => {
          const {data} = response.data
          localStorage.setItem('token',data.token)//将res中的token存入localstorage中
          const token = localStorage.getItem('token')
          console.log("登陆成功" + token)
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
          <button class="button" onClick={this.loginHandler}>登录</button>
        </div>
      </div>
    )
  }
}