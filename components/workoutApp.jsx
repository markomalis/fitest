var React = require("react");

var DetailPanel = require("./detailPanel");
var ExerciseList = require("./exerciseSearchList");
var Search = require("./search");
var WorkoutDetailPanel = require("./workoutDetailPanel");

module.exports = React.createClass({
  getInitialState() {
    return {
      detail: {},
      workoutList: []
    };
  },
  render() {
    return (
      <div className="col-xs-12">
        <div className="row">
          <ExerciseList exercises={this.props.data} exerciseDetail={this.exerciseDetail} addExercise={this.addExercise} />
          <DetailPanel>
            <WorkoutDetailPanel workoutList={this.state.workoutList} detail={this.state.detail}/>
          </DetailPanel>
          
        </div>
      </div>
    );
  },
  addExercise(exercise) {
    this.setState({workoutList: this.state.workoutList.concat([exercise])});
  },
  exerciseDetail(exercise) {
    this.setState({detail: exercise});
  }
});
