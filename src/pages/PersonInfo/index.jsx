import React, { Component } from 'react'
import styles from './index.module.css'
import backButton from '../../img/back.png'
import Portrait from '../../img/portrait.png'

export default class PersonInfo extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  To_Setting = () => {
    this.props.history.push('/tudo/setting')
  }
  
  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={backButton} alt="backImg" onClick={this.To_Setting} />
          <span className={styles.InfoTitle}>个人信息</span> <div></div>
        </div>
        <div className={styles.between1}></div>
        <div className={styles.Side_up_div}>
          <span>头像</span>
          <img src={Portrait} alt="Portrait" className={styles.Portrait}></img>
        </div>
        <div className={styles.Middle_div} onClick={this.BindEmail}>
          <span>昵称</span>
        </div>
        <div className={styles.Middle_div}>
          <span>学号</span>
        </div>
        <div className={styles.Middle_div}>
          <span>性别</span>
        </div>
        <div className={styles.Side_down_div}>
          <span>个性签名</span>
        </div>

        <div className={styles.bottom}></div>

      </div>
    )
  }
}
