import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class ChangePass extends Component {
  
  componentDidMount(){
    if(!localStorage.getItem('token')) {
      this.props.history.push('/login')
      console.log("您尚未登录，请先登录后再进行操作噢")
    }
  }
}