import React, { Component } from 'react'
import styles from './index.module.css'
import ActCard from '../../components/ActCard'
import BackButton from '../../img/back.png'

export default class ActList extends Component {
   //鉴权
   componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/tudo/login')
    }
  }
  
  To_Mainpage = () => {
    this.props.history.push("/tudo/mainpage")
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
              return <ActCard onClick={this.To_ActDelt} />
            }
            )
          }
        </ul>
      </div>
    )
  }
}
