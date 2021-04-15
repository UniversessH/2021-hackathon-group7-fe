import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Mainpage from './pages/Mainpage'
//import Mypage from './pages/MyPage'
import './App.css';
//import menu from './img/menu.png';
//import map from './img/map.jpg'

export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/mainpage" component={Mainpage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect to="/mainpage" />
        </Switch>
      </div>
    )
  }
}