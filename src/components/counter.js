import React, { Component } from 'react';
class Counter extends Component{
	constructor(props){
		super(props);
	}

	
		
	render(){
		console.log(this.props.counter.id);
		return (
		<div>
		<span className={this.getClasses()}> {this.formateCount()} </span>
		<button onClick ={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
		<button onClick ={() => this.props.onDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2">Delete</button>
		</div>
		);
		
	}
	
	getClasses(){
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}
	
	formateCount(){
		return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value; 
	}
}
export default Counter;
