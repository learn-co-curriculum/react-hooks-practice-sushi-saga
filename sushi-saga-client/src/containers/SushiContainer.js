import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'
import { getSushi } from '../services/backend'

class SushiContainer extends Component {
  componentDidMount() {
    getSushi().then(this.props.storeSushi)
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.page.map(x => <Sushi {...x} eaten={this.props.eaten} />)
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

// console.log(SushiContainer);
// let propProvider = connect()
// console.log(propProvider);
// let ConnectedSushiContainer = propProvider(SushiContainer);
// console.log(ConnectedSushiContainer);

let mapStateToProps = (state) => {
  let offset = state.menu.offset;
  let page = state.menu.list.slice(offset, offset + 4);
  return {
    page: page,
    eaten: state.order.eaten
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    storeSushi: (data) => dispatch({ type: 'FETCH_SUSHI', data: data })
  }
}

// export default ConnectedSushiContainer;
export default connect(mapStateToProps, mapDispatchToProps)(SushiContainer);