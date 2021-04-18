import React, { Component } from 'react'
import styles from './index.module.css'
import ActCard from '../../components/ActCard'
import BackButton from '../../img/back.png'

export default class ActList extends Component {
  //以下为测试数据
  /*state = {
    data: [
      {
        id: "01",
        Title: "百年校庆",
        Content: "校友捐赠",
        StartTime: "2021-5.1",
        EndTime: "2021-5.2",
        Place: "艺术楼",
      },
      {
        id: "02",
        Title: "学习为本",
        Content: "主题班会",
        StartTime: "2021-3.3",
        EndTime: "2021-3.3",
        Place: "建工楼",
      },
      {
        id: "03",
        Title: "学习新思想，争做新青年",
        Content: "学习内容分享会",
        StartTime: "2021-4.3",
        EndTime: "2021-4.3",
        Place: "慧源楼",
      }
    ]
    }*/
  //鉴权
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }

  To_Mainpage = () => {
    this.props.history.push("/tudo/mainpage") //返回主页
  }
  render() {
    const temp = [1, 2, 3]
    return (
      <div className={styles.body_div}>
        <div className={styles.backButton_div}>
          <img className={styles.backButton} src={BackButton} alt="backImg" onClick={this.To_Mainpage} />
        </div>
        <ul>
          {
            temp.map(t => {
              return <ActCard key={t} onClick={this.To_ActDelt} />  //暂时没有id，先用数组作为key
            }
            )
          }
        </ul>
      </div>
    )
  }
}
