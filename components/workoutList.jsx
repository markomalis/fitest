var React = require("react");
var WorkoutListEntry = require("./workoutListEntry");
var WorkoutListForm = require("./workoutListForm");

module.exports = React.createClass({
  render() {
    var workoutListEntries = this.props.workoutList.map(function(exercise){
      return <WorkoutListEntry exercise={exercise} />
    });
    return (
      <div className="workoutList">
        <WorkoutListForm />
        {workoutListEntries}
      </div>
    );
  }
});
