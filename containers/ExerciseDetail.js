import { connect } from 'react-redux'
import { setPanel } from '../actions/exercises/action'
import ExerciseDetailPanel from '../components/exerciseDetailPanel'

const mapStateToProps = (state) => {
  return {
    exercise: state.exercises[state.detail],
    visiblePanel: state.visiblePanel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisiblePanel: () => {
      dispatch(setPanel("list"))
    } 
  }
}

const ExerciseDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDetailPanel)

export default ExerciseDetail
