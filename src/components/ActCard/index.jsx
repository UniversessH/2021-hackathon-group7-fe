import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styles from './index.module.css'
import test from '../../img/test.jpg'

class ActCard extends Component {
  state = {
    Title: "活动名称",
    Site: "活动地点",
    Time: "活动时间",
    Owner: "活动主办方"
  }

  To_ActDelt = () => {
    this.props.history.push("/tudo/actdelt")
  }

  render() {
    return (
      <div className={styles.Card} onClick={this.To_ActDelt}>
        <img src={test} className={styles.InfoImg} alt="pic"></img>
        <div className={styles.Info}>
          <span className={styles.Title}>{this.state.Title}</span>
          <span className={styles.Detail}>{this.state.Site}</span>
          <span className={styles.Detail}>{this.state.Time}</span>
          <span className={styles.Detail}>{this.state.Owner}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(ActCard)