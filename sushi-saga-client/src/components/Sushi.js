import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {id, img_url, name, price, eaten} = props.sushiProp

  return (
    <div className="sushi">
      <div className="plate" 
         
           onClick={ props.handleEatSushi }>
        { 
          /* Tell me if this sushi has been eaten! */ 
           eaten ?
            null
          :
            <img id = {id} src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi