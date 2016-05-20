var classNames = require("classnames")
var React = require("react");
var ExerciseDetail = require("./exerciseDetail");
var WorkoutList = require("./workoutList");

module.exports = React.createClass({
  render() {
    classList = {
      "col-xs-12", 
      "col-sm-6", 
      (this.props.visiblePanel == "detail") ? " " : "hidden-xs"
    } 
    
    return (
      <div id="detail-panel" className={classList} >
        <BackToSearchButton text="Back" setVisiblePanel={this.props.setVisiblePanel} />
        <ExerciseDetail exercise={this.props.exercise} />
      </div>
    );
  }
});


