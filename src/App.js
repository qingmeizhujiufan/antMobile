import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  btnClick: function(url) {
    this.context.router.push(url);
  },
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => this.btnClick('/device/contractLedgerList')}>跳转</Button>
      </div>
    );
  }
})

export default  Home;
