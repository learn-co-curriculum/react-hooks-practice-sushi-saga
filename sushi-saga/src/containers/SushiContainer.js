import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

	state = {
		display: 0,
	}

	renderSushi = () => {
		return this.props.sushis.slice(this.state.display, this.state.display+4).map((sushi) => {
			return <Sushi sushi={sushi} eat={this.props.eat} taken={this.props.eaten.includes(sushi)}/>
		})
	}

	more = (event) => {
		this.setState({
			display: this.state.display + 4
		})
	}

	

	render(){
		return (
			<Fragment>
				<div className="belt">
					{this.renderSushi()}
					<button onClick={this.more} >More sushi!</button>
				</div>
			</Fragment>
		)
	}
}

export default SushiContainer