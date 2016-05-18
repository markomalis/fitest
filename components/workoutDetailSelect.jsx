var React = require("react");

module.exports = React.createClass({
  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className={ this.props.visible.workoutList ? 'active' : '' } role="navigation" onClick={this.props.showWorkoutList}><a>Create Workout</a></li>
        <li className={ this.props.visible.exerciseDetail ? 'active' : '' } role="navigation" onClick={this.props.showExerciseDetail}><a>Exercise</a></li>
      </ul>
    );
  }
});
