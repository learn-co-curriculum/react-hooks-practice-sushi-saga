export default (state = { list: [], offset: 0 }, action) => {
  // console.log(state, action)
  switch (action.type) {
    case "FETCH_SUSHI": {
      // return Object.assign({}, state, { list: action.data })
      return { ...state, list: action.data }
    }
    case "MORE_SUSHI": {
      let newOffset = (state.offset + 4) % 100
      return { ...state, offset: newOffset }
    }
    default: return state;
  }
};