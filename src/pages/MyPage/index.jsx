import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import styles from './index.module.css'
import Portrait from '../../img/portrait.png'
import Temp from '../../img/temp.png'
import Heart from '../../img/heart.png'
import Setting from '../../img/setting.png'
import BackButton from '../../img/back.png'

export default class MyPage extends Component {
  componentDidMount() {
    //鉴权
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }

    this.fan = PubSub.subscribe('username', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  To_Setting = () => {
    this.props.history.push("/tudo/setting")
  }
  To_Mainpage = () => {
    this.props.history.push("/tudo");
  }
  To_ActList =() => {
    this.props.history.push("/tudo/actlist")
  }

  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={BackButton} alt="backImg" onClick={this.To_Mainpage} />
        </div>
        <div className={styles.Portrait_div}>
          <img className={styles.Portrait} src={Portrait} alt="portrait"></img>
          <span className={styles.username}>用户名</span>
        </div>
        <div className={styles.Side_div} onClick={this.To_ActList}>
          <img src={Temp} alt="Temp" className={styles.small_pic} />
          <span>我的时刻</span>
        </div>
        <div className={styles.Middle_div} onClick={this.To_ActList}>
          <img src={Heart} alt="Heart" className={styles.small_pic} />
          <span>我的关注</span>
        </div>
        <div className={styles.Side_div} onClick={this.To_Setting}>
          <img src={Setting} alt="Setting" className={styles.small_pic} />
          <span>设置</span>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.fan)
  }
}
