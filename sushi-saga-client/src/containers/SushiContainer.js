import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushiDetail => <Sushi handleEatSushi={props.handleEatSushi} sushiProp={sushiDetail}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer