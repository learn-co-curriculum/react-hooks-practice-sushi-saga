import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {

	state = {
		sushis: [],
		eaten: [],
		cost: 0,
		budget: 100
	}

	componentDidMount(){
		fetch(API)
		.then(res => res.json())
		.then((res) => {
			this.setState({
				sushis: res
			})
		})
	}

	eat = (sushi) => {

		const newCost = this.state.cost + sushi.price

		if (!this.state.eaten.includes(sushi) && newCost <= this.state.budget ) {
			this.setState({
				eaten: [...this.state.eaten, sushi],
				cost: newCost
			})
		}
	}

	render() {
		return (
			<div className="app">
				<SushiContainer sushis={this.state.sushis} eat={this.eat} eaten={this.state.eaten} />
				<Table remainingBudget={this.state.budget - this.state.cost} eaten={this.state.eaten}/>
			</div>
		);
	}
}

export default App;
