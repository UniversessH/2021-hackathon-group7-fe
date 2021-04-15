import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import logo from '../../img/Login_logo.png'
import backButton from '../../img/back.png'

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    passwordCheck: "",
    show: false,
    loading: false
  }

  To_Login = () => {
    this.props.history.push("/login");
  }

  getUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  getPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  getPasswordCheck = (event) => {
    this.setState({
      passwordCheck: event.target.value
    })
  }
  showInfo = (event) => { this.setState({ show: true }) }
  remInfo = (event) => { this.setState({ show: false }) }
  RegisterHandler = () => {
    this.setState({
      loading:true
    })
    if ((!this.state.username) || (!this.state.password)) {
      this.setState({
        loading:false
      })
      toast.error("请输入正确的信息", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (this.state.password === this.state.passwordCheck) {
      axios({
        method: 'post',
        url: "https://nspyf.top/register",
        data: {
          username: this.state.username,
          password: this.state.password
        },
      })
        .then(
          response => {
            this.setState({
              loading: false
            })
            toast.success('成功注册！', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          },
          error => {
            this.setState({
              loading: false
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
    } else {
      this.setState({
        loading:false
      })
      toast.error("第二次输入的密码不正确哦", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  render() {
    return (
      <div className="body_div">
        <div className="backButton_div">
          <img className="backButton" src={backButton} alt="backImg" onClick={this.To_Login} /><span className="backText" onClick={this.To_Login}>返回</span>
        </div>
        <div className="inputDiv">
          <img className="logo" src={logo} alt="loginLogo" />
          <input type="text" placeholder="请输入账号" onChange={this.getUsername} onFocus={this.showInfo} onBlur={this.remInfo} />
          {this.state.show ? (
            <div className='smallLink_div'><span className="smallLink">长度在2-16位之间，只含大小写字母和数字&nbsp;(可在注册成功后进入个人页绑定邮箱哦)</span></div>
          ) : null}
          <input type="password" placeholder="请输入密码" onChange={this.getPassword} onFocus={this.showInfo} onBlur={this.remInfo} />
          {this.state.show ? (
            <div className='smallLink_div'><span className="smallLink">长度在8-32位之间，只含大小写字母、数字和符号</span></div>
          ) : null}
          <input type="password" placeholder="请再次输入密码" onChange={this.getPasswordCheck} />
          {this.state.loading ? (
            <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          ) : null}
          <button className="loginButton" onClick={this.RegisterHandler}>注册</button>
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