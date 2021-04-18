import React, { Component } from 'react'
import styles from './index.module.css'
import Portrait from '../../img/portrait.png'
import Message from '../../img/mail.png'
import Art from "../../img/Art.png"
import BaifanStatium from "../../img/BaifanStatium.png"
import Constructer from "../../img/Constructer.png"
import Extramen from "../../img/Extramen.png"
import Hospital from "../../img/Hospital.png"
import Liberal from "../../img/Liberal.png"
import Library from "../../img/Library.png"
import MainBuild from "../../img/MainBuild.png"
import RoundSquare from '../../img/RoundSquare.png'
import Science from '../../img/Science.png'
import TianjianBP from '../../img/TianjianBP.png'
import TianjianPG from '../../img/TianjianPG.png'
import XiuxianBP from '../../img/XiuxianBP.png'
import XiuxianPG from '../../img/XiuxianPG.png'
import XiuxianSquare from '../../img/XiuxianSquare.png'
import Tree_c from '../../img/Tree_c.png'
import Trees1 from '../../img/trees1.png'
import Trees2 from '../../img/trees2.png'
import Trees3 from '../../img/trees3.png'
import Trees4 from '../../img/trees4.png'
import Trees5 from '../../img/trees5.png'

export default class Mainpage extends Component {
  To_Mypage = () => {
    this.props.history.push("/tudo/mypage")
  }
  To_SearchList = () => {
    this.props.history.push("/tudo/searchlist")
  }
  To_Message = () => {
    this.props.history.push("/tudo/message")
  }
  To_ActList = () => {
    this.props.history.push("/tudo/actlist")
  }
  render() {
    return (
      <div className={styles.body_div}>
        <div className={styles.TopBar}>
          <img src={Portrait} alt="Portrait" className={styles.Portrait} onClick={this.To_Mypage}></img>
          <input className={styles.Search} onClick={this.To_SearchList} />
          <img src={Message} alt="Message" className={styles.Message} onClick={this.To_Message}></img>
        </div>
        <div className={styles.Occupy}></div>   {/*由于Topbar置顶，所以用个div占位...*/}
        <div className={styles.map}>
          <div className={styles.Rank1}>
            <img src={TianjianBP} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Science} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Constructer} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Tree_c} className={styles.Tree_c} alt='pic' ></img>
            <img src={Trees1} className={styles.Building} alt='pic' ></img>
          </div>
          <div className={styles.Rank2}>
            <img src={TianjianPG} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Library} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Tree_c} className={styles.Tree_c} alt='pic'></img>
            <img src={Liberal} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={MainBuild} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={XiuxianSquare} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Tree_c} className={styles.Tree_c} alt='pic'></img>
          </div>
          <div className={styles.Rank3}>
            <img src={XiuxianPG} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Extramen} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Tree_c} className={styles.Tree_c} alt='pic'></img>
            <img src={RoundSquare} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Trees1} className={styles.Building} alt='pic'></img>
            <img src={Trees2} className={styles.Building} alt='pic'></img>
          </div>
          <div className={styles.Rank4}>
            <img src={XiuxianBP} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Tree_c} className={styles.Tree_c} alt='pic'></img>
            <img src={Hospital} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Art} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Trees5} className={styles.Building} alt='pic'></img>
            <img src={Trees4} className={styles.Building} alt='pic'></img>
          </div>
          <div className={styles.Rank5}>
            <img src={Trees3} className={styles.Building} alt='pic'></img>
            <img src={BaifanStatium} className={styles.Building} alt='pic' onClick={this.To_ActList}></img>
            <img src={Trees4} className={styles.Building} alt='pic'></img>
            <img src={Trees5} className={styles.Building} alt='pic'></img>
          </div>
        </div>
      </div>
    )
  }
}
