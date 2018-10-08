import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';


class Counters extends Component{
	constructor(){
		super();		
		
	}
	render(){	
		return (
		<div>
		
		<button onClick={this.props.onReset} className="btn btn-danger btn-sm m-2">Reset</button>
		{ this.props.counters.map(  counter => <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} /> )  }
		</div>
		);
		
	}
}
export default Counters;
