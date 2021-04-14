import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class BindEmail extends Component {
  state = {
    email: '',
    key: ''
  }

  //鉴权
  componentDidMount(){
    if(!localStorage.getItem('token')) {
      this.props.history.push('/login')
      console.log("您尚未登录，请先登录后再进行操作噢")
    }
  }

  getEmail = (event) => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    })
  }

  getKey = (event) => {
    this.setState({
      key: event.target.value
    })
  }

  sendEmail = () => {
    const token = localStorage.getItem('token')
    const {email} = this.state
    axios({
      method: 'post',
      url: 'api/auth/email/binding-key',
      headers: {
        'Token' : token
      },
      data: {
        email
      }
    })
      .then(
        response => {
          console.log("发送成功")
        },
        error => {
          console.log(error)
        }
      )
  }

  BindHandler = () => {
    const token = localStorage.getItem('token')
    const {email} = this.state
    axios({
      method: 'post',
      url: 'api/auth/email/binding',
      headers: {
        'Token' : token
      },
      data: this.state
    })
      .then(
        response => {
          console.log("绑定成功")
        }, error => {
          console.log(error)
        }
      )
  }

  render() {

    return (
      <div class="box1">
        <div class="center">
          <input type="text" placeholder="请输入您的邮箱" onChange={this.getEmail} />
          <button onClick={this.sendEmail}>发送验证码</button>
        </div>
        <div class="center">
          <input type="text" placeholder="请输入您的验证码" onChange={this.getKey} />
        </div>
        <div class="center">
          <button class="button" onClick={this.BindHandler}>绑定</button>
        </div>
      </div>
    )
  }
}
