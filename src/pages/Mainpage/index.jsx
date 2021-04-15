import React, { Component } from 'react'
import './index.css'

export default class Mainpage extends Component {
  To_Login = () => {
    this.props.history.push("/login");
  }
  To_Register = () => {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div className="body_div_MP">
        <p onClick = {this.To_Login}>切换到登录</p> 
        <p onClick = {this.To_Register}>切换到注册</p>
      </div>
    )
  }
}
