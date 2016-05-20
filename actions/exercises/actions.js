/*
 * action types
 */

export const ADD_EXERCISE = "ADD_EXERCISE"
export const GET_EXERCISE_DETAILS = "GET_EXERCISE_DETAILS"
export const EDIT_EXERCISE = "EDIT_EXERCISE"
export const SEARCH_EXERCISE = "SEARCH_EXERCISE"
export const SET_VISIBLE_PANEL = "SET_VISIBLE_PANEL"
export const SET_VISIBLE_DETAIL = "SET_VISIBLE_PANEL"

/*
 * other constants
 */

export const PagePanels = {
  SHOW_LIST : "SHOW_LIST",
  SHOW_DETAILS : "SHOW_DETAILS"
}

export const DetailActions = {
  ADD_EXERCISE : "SHOW_LIST",
  EDIT_EXERCISE : "SHOW_DETAILS"
}

/*
 * action creators
 */

export const addExercise(exercise){
  return { type: ADD_EXERCISE, exercise }
}

export function editExercise(index, exercise){
  return { type: EDIT_EXERCISE, { index: index, exercise: exercise } }
}

export function getExerciseDetails(index){
  return { type: GET_EXERCISE_DETAILS, index }
}

export const searchExercise(text){
  return { type: SEARCH_EXERCISE, text}
}

export const setPanel(panel){
  return { type: SET_VISIBLE_PANEL, panel }
}

export const setDetail(detail){
  return { type: SET_VISIBLE_DETAIL, detail }
}
