import React, { Component } from 'react'
import styles from './index.module.css'

export default class Loading extends Component {
  render() {
    return (
      <div class={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
      </div>
    )
  }
}
