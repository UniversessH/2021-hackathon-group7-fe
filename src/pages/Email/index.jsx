import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading'
import styles from './index.module.css'
import Logo from '../../img/Login_logo.png'
import BackButton from '../../img/back.png'


export default class Email extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  state = {
    email: 'undefined',
    loading: false,
  }


  To_Setting = () => {
    this.props.history.push("/tudo/setting")
  }

  To_BindEmail = () => {
    this.props.history.push("/tudo/bindemail")
  }

  //查询账号是否绑定邮箱
  retrieveEmail = () => {
    this.setState({
      loading: true
    })
    const token = localStorage.getItem('token')
    axios({
      method: 'get',
      url: 'https://nspyf.top:11000/auth/email',
      headers: {
        'Token': token
      }
    })
      .then(response => {
        const { data } = response.data
        this.setState({
          email: data.email,
          loading: false
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
        });
      })
  }

  //删除账号的绑定邮箱
  deleteEmail = () => {
    this.setState({
      loading: true
    })
    const token = localStorage.getItem('token')
    axios({
      method: 'delete',
      url: 'https://nspyf.top:11000/auth/email/binding',
      headers: {
        'Token': token
      }
    })
      .then(response => {
        this.setState({
          loading: false
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
        });
      })
  }

  render() {
    let EmailInfo = ""
    if (this.state.email === 'undefined') {
      EmailInfo = '点击查询邮箱是否绑定'
    } else if (this.state.email === '') {
      EmailInfo = '未绑定，可点击绑定邮箱进行邮箱绑定操作'
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
          <p style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>{EmailInfo}</p>
          <button className={styles.ConfirmButton} onClick={this.retrieveEmail}>查询邮箱</button>
          <button className={styles.ConfirmButton} onClick={this.To_BindEmail}>绑定邮箱</button>
          <button className={styles.ConfirmButton} onClick={this.deleteEmail}>解除绑定</button>
          {this.state.loading ? <Loading /> : null}
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
