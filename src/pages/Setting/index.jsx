import React, { Component } from 'react'
import styles from './index.module.css'
import backButton from '../../img/back.png'

export default class Setting extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  To_MyPage = () => {
    this.props.history.push('/tudo/mypage')
  }

  To_PersonInfo = () => {
    this.props.history.push('/tudo/personinfo')
  }

  quit = () => {
    this.props.history.push('/tudo/login')
    localStorage.clear()
  }
  To_Email = () => {
    this.props.history.push('/tudo/email')
  }
  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.between1}>
          <img className={styles.backButton} src={backButton} alt="backImg" onClick={this.To_MyPage} />
        </div>
        <div className={styles.Side_up_div} onClick={this.To_PersonInfo}>
          <span>个人资料</span>
        </div>
        <div className={styles.Middle_div} onClick={this.To_Email}>
          <span>邮箱设置</span>
        </div>
        <div className={styles.Middle_div}>
          <span>清除缓存</span>
        </div>
        <div className={styles.Middle_div}>
          <span>隐私政策</span>
        </div>
        <div className={styles.Side_down_div}>
          <span>关于TU DO</span>
        </div>
        <div className={styles.between2}></div>
        <div className={styles.quit} onClick={this.quit}>
          <span>退出登录</span>
        </div>
        <div className={styles.bottom}></div>
      </div>
    )
  }
}
