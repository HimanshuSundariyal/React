import React, { Component } from 'react';
class Navbar extends Component{
	constructor(props){
		super(props);
	}		
	render(){
		return (
		<nav className="navbar navbar-light bg-light">
		<a className="navbar-brand" href="#">
		<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
		</a>
		</nav>
		);
		
	}
}
export default Navbar;
