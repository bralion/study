import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';

import App from "../pages/home/App.js";
import Test from  "../pages/test/Test.js";


// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
	render(){
		return(
			<HashRouter>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/test" exact component={Test} />
					<Redirect to="/"/>
				</Switch>
			</HashRouter>
		)
	}
}
