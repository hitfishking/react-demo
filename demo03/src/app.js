import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import './components/global/global.scss';

import Nav from './components/global/menu';
import Home from './components/home/home';
import Story from './components/story/story';
import Travel from './components/travel/travel';


class App extends React.Component{
	render(){
		return(
			<div>	
				<Nav/>
				{this.props.children}
			</div>				
		)                                   // data flow从上到下，App object的children参数，由router引擎函数提供；
	}
}

//Router,Route相当于配置条目，供底层的router function进行调度；
// path='/'时App只是框架，没有实质内容，故需要有一个IndexRoute来提供默认页面；
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/Story" component={Story}/>
			<Route path="/Travel" component={Travel}/>
		</Route>
	</Router>
	),document.body       //挂载在document.body下的<Router>应该是一个路由函数，而不是dom；React中，一切都是函数或class，
	                       //落到dom上，可以是dom，也可以是函数；
);

