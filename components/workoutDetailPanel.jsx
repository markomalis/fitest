var React = require("react");
var ExerciseDetail = require("./exerciseDetail");
var WorkoutDetailSelect = require("./workoutDetailSelect");
var WorkoutList = require("./workoutList");

module.exports = React.createClass({
  getInitialState() {
    return {
      visible: {
        workoutList: true,
        exerciseDetail: false
      }
    }
  },
  render() {
    return (
      <div>
        <WorkoutDetailSelect visible={this.state.visible} showExerciseDetail={this.showExerciseDetail} showWorkoutList={this.showWorkoutList} />
        <div className={ this.state.visible.workoutList ? 'active' : 'hidden' }>
          <WorkoutList  workoutList={this.props.workoutList} />
        </div>
        <div className={ this.state.visible.exerciseDetail ? 'active' : 'hidden' }>
         <ExerciseDetail exercise={this.props.detail} />
        </div>
      </div>
    );
  },
  showExerciseDetail(event){
    this.setState({
      visible: {
        workoutList: false,
        exerciseDetail: true
      }
    });
  },
  showWorkoutList(event){
    this.setState({
      visible: {
        workoutList: true,
        exerciseDetail: false
      }
    });
  }
});


