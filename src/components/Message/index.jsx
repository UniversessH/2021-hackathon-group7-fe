import React, { Component } from 'react'
import styles from './index.module.css'
import Portrait from '../../img/portrait.png'

export default class Message extends Component {
  render() {
    return (
      <div className={styles.Message}>
        <div style={{ display: "inline-block", margin:"2%" , width: "30%", height: "100%" }}>
          <div className={styles.UserInfo}>
            <img src={Portrait} className={styles.Portrait} alt="portrait"></img>
            <span>用户名</span>
          </div>
        </div>
        <div style={{ display: "inline-block", width: "60%", height: "100%"}}>
            <span style={{wordBreak: "break-all",width:"80%"}}>TEST</span>
        </div>
      </div>
    )
  }
}
