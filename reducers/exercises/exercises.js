const function exercises(state, action){
  switch(action.type){
    case "GET_EXERCISE_DETAILS":
      return Object.assign({}, state, {
        detail: action.index
      })
    case "SEARCH_EXERCISE":
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}
