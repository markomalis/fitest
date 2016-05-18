var React = require("react");
var ExerciseDetail = require("./exerciseDetail");
var WorkoutList = require("./workoutList");

module.exports = React.createClass({
  render() {
    return (
      <div id="detail-panel" className="col-xs-12 col-sm-6 hidden-xs" >
        <ExerciseDetail exercise={this.props.exercise} visible={this.props.visible} />
      </div>
    );
  }
});


