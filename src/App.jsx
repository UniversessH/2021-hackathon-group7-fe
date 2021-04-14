import React, { Component } from 'react'
//import { Link, Switch, Route } from 'react-router-dom'
//import Mypage from './pages/MyPage'
import './App.css';
//import menu from './img/menu.png';
import map from './img/map.jpg'

export default class App extends Component {
  
  render() {
    return (
      <div className="map_div_class" id="map_div_class">
        <img className="map_class" alt="" src={map}/> 
      </div>
    )
  }
}