var React = require("react");
var classNames = require("classnames");

module.exports = React.createClass({
  addExerciseToWorkoutList(event){
    event.preventDefault();
    this.props.addExercise(this.state.exercise)
  },
  
  getInitialState: function() {
    return {
      exercise: this.props.exercise
    }
  },
  
  render() {
    var addbutton = (this.props.addExercise) ? <button type="button" className="btn btn-styled exerciseRowAddToWorkoutList border-radius-1" onClick={this.addExerciseToWorkoutList}>+</button> : null;
    
    buttonClasses = classNames("btn", "btn-styled", "exerciseRowDetail", "border-radius-1", {"full-width": addbutton ? false : true } )
  
    return (
      <div style={this.state.exercise.visible ? {display:'inline-block'} : {display:'none'} } className="btn-group exerciseRow" role="group" >
        <button type="button" className={buttonClasses} onClick={this.setDetailExercise}>
          {this.state.exercise.name}
        </button>
        {addbutton}
      </div>
    );
  },
  
  setDetailExercise(event){
    event.preventDefault()
    document.getElementById("exercise-search").classList.add("hidden-xs")
    document.getElementById("detail-panel").classList.remove("hidden-xs")
    this.props.exerciseDetail(this.state.exercise)
  }
});
