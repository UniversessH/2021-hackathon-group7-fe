import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import ActCard from '../../components/ActCard'
import Detail from './components/Detail'
import Comment from './components/Comment'
import styles from './index.module.css'
import BackButton from '../../img/back.png'
import Search from '../../img/find.png'
import Share from '../../img/share.png'
import Sub from '../../img/sub.png'

export default class ActDetail extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  state = {
    buttonType: true
  }

  To_ActList = () => {
    this.props.history.push("/tudo/actlist")
  }

  Switch_Comment = () => {
    this.props.history.push("/tudo/actdelt/comment")
    this.setState({
      buttonType:false
    })
  }

  SignUp_BTN = () => {
    this.setState({
      buttonType:true
    })
  }

  Send_BTN = () => {
    this.setState({
      buttonType:false
    })
  }
  
  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.Head}>
          <img className={styles.BackButton} src={BackButton} alt="backImg" onClick={this.To_ActList} />
          <div>
            <img className={styles.RightButton} src={Search} alt="pic"></img>
            <img className={styles.RightButton} src={Share} alt="pic"></img>
          </div>
        </div>
        <div style={{ height: "3.5rem", width: "100%" }}></div>
        <ActCard />
        <div className={styles.BCNav} style={{ borderRight: "grey solid" }}>
          <NavLink to="/tudo/actdelt/delt" style={{ color: "grey", textDecoration: "none" }} activeStyle={{ color: "rgb(12,167,170)" }} onClick={this.SignUp_BTN}>
            详细
          </NavLink>
        </div>
        <div className={styles.BCNav}>
          <NavLink to="/tudo/actdelt/comment" style={{ color: "grey", textDecoration: "none" }} activeStyle={{ color: "rgb(12,167,170)" }} onClick={this.Send_BTN}>
            评论
          </NavLink>
        </div>
        <Switch>
          <Route path="/tudo/actdelt/delt" component={Detail} />
          <Route path="/tudo/actdelt/comment" component={Comment} />
          <Redirect to="/tudo/actdelt/delt" />
        </Switch>
        <div style={{ height: "10rem", width: "100%" }}></div>
        <div className={styles.Footer}>
          <div>
            <div className={styles.Sub_div}>
              <div className={styles.Sub}>
                <img src={Sub} style={{ width: "1rem" }} alt="pic" />
                <span style={{ fontSize: "0.5rem", color: "white", marginBottom: "0.2rem" }}>关注</span>
              </div>
            </div>
            <input className={styles.Input} placeholder="友善的你想说什么？" onClick={this.Switch_Comment} />
          </div>
          {this.state.buttonType ? (
            <button className={styles.Button}>我要报名</button>
          ) :
            <button className={styles.Button}>发送</button>
          }
        </div>
      </div>
    )
  }
}
