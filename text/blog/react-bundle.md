### Router4 按需加载

> 最近在学习react，由于react-router已经到了4的版本，抛弃 getComponent来按需加载，在网上看了很多对此的教程，有一些是可用的，但有一些感觉就像是复制别人的代码，而不能使用，我记录一下自己的代码，方便后期可以快速使用

参考链接

-  https://www.jianshu.com/p/d712a5030c13

- https://blog.csdn.net/sinat_17775997/article/details/70332310

#### 过程

	在 router4 当中可以使用 bundle-loader 来进行按需加载

首先安装 `npm install bundle-loader --save-dev`

创建 bundle.js, 代码如下

	import React, { Component } from 'react'
	export default class Bundle extends React.Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }
    componentWillMount() {
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        if (!this.state.mod)
            return false
        return this.props.children(this.state.mod)
    }
	}
	
#### 引用js 代码
login.js


	import React from 'react';
	class IndexPage extends React.Component {
    render() {
        return <div>主页</div>

    }
	}
	export default IndexPage;
router.js

	import React from 'react';
	import { Switch,BrowserRouter,Router,Route,Link } from 'react-router-dom'
	import LoginPage from 'bundle-loader?lazy!./views/view/login';
	import IndexPage from 'bundle-loader?lazy!./views/view/index';
	import Bundle from '../until/bundle';
	const Login = () =>(
	    <Bundle load={LoginPage}>
	        {(List) => <List/>}
	    </Bundle>
	)
	const Index = () =>(
	    <Bundle load={IndexPage}>
	        {(List) => <List/>}
	    </Bundle>
	)
	export const Main = () => (
	        <div >
	            <Switch>
	                <Route path='/' component={Index}></Route>
	                <Route path='/login' component={Login}></Route>
	                {/*<Route path='/base' component={Base}></Route>*/}
	            </Switch>
	        </div>
	)

> 总结，才学习react，肯定有很多不会的，若有错误，还请指教。谢谢观看
