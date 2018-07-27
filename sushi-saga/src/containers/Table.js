import React, { Fragment } from 'react'

class Table extends React.Component {

	renderPlates = (eaten) => {
		return eaten.map((sushi, index) => {
			return <div className="empty-plate" style={{ top: -10 * index }}/>
		})
	}
	render(){
		return (
			<Fragment>
				<h1>You have: ${this.props.remainingBudget} remaining!</h1>
				<div className="table">
					<div className="stack">
						{this.renderPlates(this.props.eaten)}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Table