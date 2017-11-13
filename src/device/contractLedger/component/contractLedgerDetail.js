import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { NavBar, Icon, SearchBar, Button, Tabs, RefreshControl, ListView } from 'antd-mobile';
import $ from 'n-zepto';
import Constants from '../../../core/constants';
import Ajax from '../../../core/ajax';

var ContractLedgerList = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      listData: []
    };
  },
  componentWillMount: function() {
    console.log('comget == ', Ajax.Comget);
    let that = this;
    let param = {
      id: '8aaac3cb5fa0d373015fa37e894b0000',
      dealRecent: 1
    };
    Ajax.Comget(
      'http://test.cscec3b.com.cn/icop-devcont-web/deviceleasecontract/findById',
      param,
      function(data){
        console.log('comget ajax back == ', data);
        that.setState({
          listData: data.backData.content
        });
      }
    );
  },
  callback: function() {
    this.context.router.goBack();
  },
  render() {
    return (
      <div>
        <NavBar
            icon={<Icon type="left" />}
            leftContent="返回" 
            mode="dark" 
            onLeftClick={this.callback}
          >设备合同</NavBar>
      </div>
    );
  }
});

export default ContractLedgerList;
