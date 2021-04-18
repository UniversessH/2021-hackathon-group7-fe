import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"70%",height="80"}}>
          <h1>TUDO图度项目团队</h1>
          <ul>
            <li>产品组：邹菲</li>
            <li>产品组：张莹</li>
            <li>运营组：江怡</li>
            <li>运营组：熊雨桐</li>
            <li>设计组：陈明辉</li>
            <li>后端组：彭延飞</li>
            <li>后端组：王一鸣</li>
            <li>前端组：黄锦川</li>
          </ul>
        </div>
      </div>
    )
  }
}
