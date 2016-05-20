import { connect } from 'react-redux'
import { getExerciseDetails, searchExercise } from '../actions/exercises/action'
import ExerciseSearchList from '../components/exerciseSearchList'

const getVisibleTodos = (exercises, text) => {
  return exercises.filter(e => e.name.indexOf(text)=>0 )
}

const mapStateToProps = (state) => {
  return {
    exercises: getVisibleExercises(state.exercises, state.search),
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getExerciseDetail: (index) => {
      dispatch(getExerciseDetails(index))
    },
    onSearchChange: (text) => {
      dispatch(searchExercise(text))
    },
    setVisiblePanel: () => {
      dispatch(setPanel("detail"))
    } 
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseSearchList)

export default VisibleTodoList
