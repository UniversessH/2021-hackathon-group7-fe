import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading'
import styles from './index.module.css'
import Logo from '../../img/Login_logo.png'
import BackButton from '../../img/back.png'


export default class Email extends Component {
  state = {
    email: 'undefined',
    Retrieveloading: false,
    Deleteloading: false
  }
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  To_Setting = () => {
    this.props.history.push("/tudo/setting")
  }

  toBindEmail = () => {
    this.props.history.push("/tudo/bindemail")
  }

  retrieveEmail = () => {
    this.setState({
      Retrieveloading: true
    })
    const token = localStorage.getItem('token')
    axios({
      method: 'get',
      url: '/api/auth/email',
      headers: {
        'Token': token
      }
    })
      .then(
        response => {
          const { data } = response.data
          this.setState({
            email: data.email,
            Retrieveloading: false
          })
          toast.success('查询成功！', {
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
            Retrieveloading: false
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

  deleteEmail = () => {
    this.setState({
      Deleteloading: true
    })
    const token = localStorage.getItem('token')
    axios({
      method: 'delete',
      url: '/api/auth/email/binding',
      headers: {
        'Token': token
      }
    })
      .then(
        response => {
          this.setState({
            Deleteloading: false
          })
          toast.success('邮箱绑定已清空！', {
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
            Deleteloading: false
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
    let EmailInfo
    if(this.state.email==='undefined') {
      EmailInfo = '未查询'
    } else if(this.state.email==='') {
      EmailInfo = '未绑定'
    } else {
      EmailInfo = this.state.email
    }
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={BackButton} alt="backImg" onClick={this.To_Setting} />
        </div>
        <div className={styles.inputDiv}>
          <img className={styles.logo} src={Logo} alt="loginLogo" />
          <p>{EmailInfo}</p>
          {this.state.Retrieveloading ? <Loading /> : null}
          <button className={styles.ConfirmButton} onClick={this.retrieveEmail}>查看邮箱</button>
          <button className={styles.ConfirmButton} onClick={this.toBindEmail}>绑定邮箱</button>
          {this.state.Deleteloading ? <Loading /> : null}
          <button className={styles.ConfirmButton} onClick={this.deleteEmail}>解除绑定</button>
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
