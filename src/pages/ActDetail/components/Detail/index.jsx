import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import test from '../../../../img/test.jpg'

//活动细节页面中的活动具体内容
export default class Detail extends Component {
  render() {
    return (
      <div>
        <div>
          <p style={{ fontSize: "1rem", marginLeft: "1rem", marginBottom: "5%" }}>宣传图片</p>
          <Carousel showArrows={false} showStatus={false} showThumbs={false}>
            <div>
              <img src={test} alt="pic" style={{ borderRadius: "0.5rem", width: "80%"  }} />
            </div>
            <div>
              <img src={test} alt="pic" style={{ borderRadius: "0.5rem", width: "80%" }} />
            </div>
            <div>
              <img src={test} alt="pic" style={{ borderRadius: "0.5rem", width: "80%" }} />
            </div>
          </Carousel>
        </div>
        <div>
          <p style={{ fontSize: "1rem", marginLeft: "1rem", marginTop: "5%", marginBottom: "5%" }}>报名方式</p>
          <p style={{ fontSize: "1rem", marginLeft: "1rem", marginBottom: "5%" }}>活动对象</p>
          <p style={{ fontSize: "1rem", marginLeft: "1rem", marginBottom: "5%" }}>活动主旨</p>
          <p style={{ fontSize: "1rem", marginLeft: "1rem", marginBottom: "5%" }}>活动内容</p>
        </div>
        <div className={styles}></div>
      </div>
    )
  }
}
