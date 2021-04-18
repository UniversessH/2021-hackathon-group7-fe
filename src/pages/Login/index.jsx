import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../components/Loading'
import styles from './index.module.css'
import Logo from '../../img/Login_logo.png'
import BackButton from '../../img/back.png'

export default class Login extends Component {
  state = {
    user: "",
    password: "",
    loading: false,
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) {
      toast.warning('你当前尚未登录，请登录后操作哦', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      toast.warning('当前已处于登录状态', {
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
  To_Register = () => {
    this.props.history.push("/tudo/register");
  }
  To_Mainpage = () => {
    this.props.history.push("/tudo");
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
      loading: true
    })
    PubSub.publish('username', { username: '' })
    axios({
      method: 'post',
      url: "https://nspyf.top:11000/login",
      data: {
        user: this.state.user,
        password: this.state.password
      }
    })
      .then(
        response => {
          this.setState({
            loading: false
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
          PubSub.publish('username', { username: data.username })
          localStorage.setItem('token', data.token)//将res中的token存入localstorage中
          this.props.history.push("/tudo")
        })
      .catch(error => {
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
        })
      })
  }

  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={BackButton} alt="backImg" onClick={this.To_Mainpage} />
        </div>
        <div className={styles.inputDiv}>
          <img className={styles.logo} src={Logo} alt="loginLogo" />
          <input type="text" className={styles.InputUser} placeholder="请输入邮箱/账号" onChange={this.getUsername} />
          <input type="password" className={styles.InputPassword} placeholder="请输入密码" onChange={this.getPassword} />
          <div className={styles.smallLink_div}><span className={styles.smallLink}>忘记密码&nbsp;&nbsp;|&nbsp;&nbsp;</span><span className={styles.smallLink} onClick={this.To_Register}>新用户注册</span></div>
          {this.state.loading ? <Loading /> : null}
          <button className={styles.loginButton} onClick={this.loginHandler}>登录</button>
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