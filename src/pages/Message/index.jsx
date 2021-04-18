import React, { Component } from 'react'
import styles from './index.module.css'
import backButton from '../../img/back.png'

export default class Message extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }
  
  To_Mainpage =() => {
    this.props.history.push('/tudo/mainpage')
  }
  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={backButton} alt="backImg" onClick={this.To_Mainpage} />
          <span className={styles.Clear}>清空</span>
        </div>
        <div className={styles.Message}>
          <span style={{color:"grey",fontSize:"0.8rem"}}>暂时没有新消息</span>
        </div>
      </div>
    )
  }
}
