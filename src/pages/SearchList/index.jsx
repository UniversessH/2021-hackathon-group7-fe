import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import styles from './index.module.css'

export default class SearchList extends Component {
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  To_Mainpage =() => {
    this.props.history.push("/todu/mainpage")
  }

  Sorry =() => {
    toast.info('此项功能仍在开发中', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  render() {
    return (
      <div>
        <div className={styles.Head}>
          <input placeholder="请输入你想查找的内容" className={styles.Search} onClick={this.Sorry}></input>
          <span className={styles.Cancel} onClick={this.To_Mainpage}>取消</span>
        </div>
        <div className="Rank">
          <h2 style={{marginLeft:"10%"}}>热榜</h2>
          <p className={styles.Serial}>1&nbsp;&nbsp;<span style={{color:"black" }}>百年校庆</span></p> 
          <p className={styles.Serial}>2&nbsp;&nbsp;<span style={{color:"black"}}>慧源楼</span></p>
          <p className={styles.Serial}>3&nbsp;&nbsp;<span style={{color:"black"}}>天健篮球场</span></p>
        </div>
        <ToastContainer/>
      </div>
    )
  }
}
