import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import logo from '../../img/Login_logo.png'
import backButton from '../../img/back.png'

export default class Login extends Component {
  state = {
    user: "",
    password: "",
    loading: false
  }

  To_Register = () => {
    this.props.history.push("/register");
  }
  To_MP = () => {
    this.props.history.push("/mainpage");
  }

  getUsername = (event) => {
    this.setState({
      user: event.target.value
    })
  }

  getPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  loginHandler = () => {
    this.setState({
      loading:true
    })
    axios({
      method: 'post',
      url: "/api/login",
      data: this.state,
    })
      .then(
        response => {
          this.setState({
            loading:false
          })
          toast.success('登录成功！', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          const { data } = response.data
          localStorage.setItem('token', data.token)//将res中的token存入localstorage中

        },
        error => {
          this.setState({
            loading:false
          })
          const { data } = error.response
          toast.error(data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      )
  }

  render() {
    return (
      <div className="body_div">
        <div className="backButton_div">
          <img className="backButton" src={backButton} alt="backImg" onClick={this.To_MP} /><span className="backText" onClick={this.To_MP}>返回</span>
        </div>
        <div className="inputDiv">
          <img className="logo" src={logo} alt="loginLogo" />
          <input type="text" placeholder="请输入邮箱/账号" onChange={this.getUsername} />
          <input type="password" placeholder="请输入密码" onChange={this.getPassword} />
          <div className='smallLink_div'><span className="smallLink">忘记密码&nbsp;&nbsp;|&nbsp;&nbsp;</span><span className="smallLink" onClick={this.To_Register}>新用户注册</span></div>
          {this.state.loading ? (
            <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          ) : null}
          <button className="loginButton" onClick={this.loginHandler}>登录</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    )
  }
}