import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
	
	
	state ={
		counters : [
		{ id:1, value:4 },
		{ id:2, value:0 },
		{ id:3, value:1 },
		{ id:4, value:3 },
		]
		
	}
	
	handelIncrement = counter => {
	    const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({ counters });
	}	
	
	handelDelete = counterId => {
		let counter = this.state.counters.filter(c => c.id !== counterId);
		this.setState( {counters : counter} );
	}
	
	handelReset = () =>{
		let counters = this.state.counters.map( c =>{
			c.value=0;
			return c;
		})
		this.setState(counters);
	}	
	
  render() {
    return (
      <React.Fragment>
	  <Navbar totalCounters ={this.state.counters.length} />
        <Counters onReset= { this. handelReset} onReset= { this.handelReset} onIncrement = {this.handelIncrement} onDelete= { this.handelDelete } counters= {this.state.counters}/>
      </React.Fragment>
    );
  }
}

export default App;
