import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './index.css';
import Home from './App';
import ContractLedgerList from './device/contractLedger/component/contractLedgerList';
import ContractLedgerDetail from './device/contractLedger/component/contractLedgerDetail';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	
	render() {
		return(
			<div>
	          {
	            this.props.children
	          }
	        </div>
		);
	}
}
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<route path="device/contractLedgerList" component={ContractLedgerList} />
			<route path="device/contractLedgerDetail/:id" component={ContractLedgerDetail} />
		</Route>
	</Router>
), document.getElementById('root'));

registerServiceWorker();
