import React, { Component } from 'react'
import Message from '../../../../components/Message'

//活动细节页面中的评论部分，目前为静态调用Message
export default class Comment extends Component {
  render() {
    return (
      <div>
        <Message/>
        <Message/>
      </div>
    )
  }
}
