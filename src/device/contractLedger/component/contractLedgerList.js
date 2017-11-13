import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { NavBar, Icon, SearchBar, Button, Tabs, RefreshControl, ListView } from 'antd-mobile';
import $ from 'n-zepto';
import Constants from '../../../core/constants';
import Ajax from '../../../core/ajax';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
   let listData = this.props.listData;
    let index = listData.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = listData.length - 1;
      }
      const obj = listData[index--];
      return (
        <div key={rowID} style={{ marginBottom: 10, padding: 0, backgroundColor: '#fff', borderRadius: 7, boxShadow: '4px 4px 6px 0 rgba(214,203,203,0.4)', overflow: 'hidden' }}>
            <Link to={{pathname: '/device/contractLedgerDetail/' + obj.id}}>
              <div
                style={{
                  margin: '10px 0 0 15px',
                  lineHeight: '21px',
                  color: '#465261',
                  fontSize: 14,
                }}
              >{obj.contName}</div>
              <div style={{ paddingLeft: '15px', fontSize: '12px', color: '#465261', lineHeight: '30px'}}>合同金额: {obj.taxTotalMny}元</div>
              <div style={{ position: 'relative', height: '40px', backgroundColor: '#f9f9f9' }}>
                  <div style={{ paddingLeft: '15px', opacity: 0.45, fontSize: 12, color: '#465261', letterSpacing: 0, lineHeight: '40px'}}>
                    {obj.supplierName}
                  </div>
                  <div style={{position: 'absolute', right: 15, top: '50%', fontSize: 12, color: '#465261', lineHeight: '14px', opacity: 0.45, transform: 'translateY(-50%)'}}>
                    {obj.createtime.substring(0, 10)} 签订
                  </div>
              </div>
              </Link>
          </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '正在加载...' : '没有了~'}
        </div>)}
        renderRow={row}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

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
    Ajax.Comget(
      'http://test.cscec3b.com.cn/icop-devcont-web/deviceleasecontract/page?pageNumber=0&type=1&pageSize=10&billState=3&companyId=8aaa004d5c67c532015c86cd30b600cb&searchText=',
      null,
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
          >合同台账</NavBar>
          <SearchBar placeholder="搜索" maxLength={8} />
        <Demo listData={this.state.listData} />
      </div>
    );
  }
});

export default ContractLedgerList;
