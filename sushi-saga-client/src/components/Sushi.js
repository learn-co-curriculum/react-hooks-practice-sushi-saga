import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.dispatch({ type: "CONSUME", id: props.id, price: props.price })}>
        { 
          props.eaten.includes(props.id) ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default connect()(Sushi)