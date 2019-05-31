export default (state = { wallet: 100, eaten: [] }, action) => {
  switch (action.type) {
    case "CONSUME": {
      let canEat = action.price < state.wallet && !state.eaten.includes(action.id)
      if (canEat)  {
        return {
          wallet: state.wallet - action.price,
          eaten: state.eaten.concat(action.id)
        }  
      } else {
        return state
      }
    }

    default: return state;
  }
};