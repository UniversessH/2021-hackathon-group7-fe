import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Mainpage from './pages/Mainpage'
import MyPage from './pages/MyPage'
import Setting from './pages/Setting'
import BindEmail from './pages/BindEmail'
import Email from './pages/Email'
import PersonInfo from './pages/PersonInfo'
import ActList from './pages/ActList'
import Message from './pages/Message'
import SearchList from './pages/SearchList'
import ActDetail from './pages/ActDetail'
import AboutUs from './pages/AboutUs'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/tudo" exact={true} component={Mainpage}></Route>
          <Route path="/tudo/mypage" component={MyPage}></Route>
          <Route path="/tudo/login" component={Login}></Route>
          <Route path="/tudo/register" component={Register}></Route>
          <Route path="/tudo/setting" component={Setting}></Route>
          <Route path="/tudo/bindemail" component={BindEmail}></Route>
          <Route path="/tudo/email" component={Email}></Route>
          <Route path="/tudo/personinfo" component={PersonInfo}></Route>
          <Route path="/tudo/actlist" component={ActList}></Route>
          <Route path="/tudo/message" component={Message}></Route>
          <Route path="/tudo/searchlist" component={SearchList}></Route>
          <Route path="/tudo/actdelt" component={ActDetail}></Route>
          <Route path="/tudo/aboutus" component={AboutUs}></Route>
          <Redirect to="/tudo" />
        </Switch>
      </div>
    )
  }
}