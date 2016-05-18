var React = require("react");
var InputGroup = require('react-bootstrap').InputGroup;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem
var Form =  require('react-bootstrap').Form

module.exports = React.createClass({
  handleClick(event) {
    var sibling = event.target.nextSibling
    sibling.offsetHeight>0 ? Velocity(sibling, { height: '0' }, { duration: 500 }) : Velocity(sibling, { height: '100%' }, { duration: 500 } ) 
  },
  
  render() {
    return (
      <div className="workoutEntry border-radius-1">
      <div className="workoutEntryButton" onClick={this.handleClick}>
        <img className="workoutEntryToggle pull-left visible-xs" src="/images/down.png"></img>{this.props.exercise.name}<img className="workoutEntryToggle pull-right visible-xs" src="/images/down.png"></img>
      </div>
      <div className="row workoutEntrySets">
    <div className="col-xs-12 ">
      <div className="title">
        Set 1
      </div>
    </div>
    <div className="col-xs-12 ">
      <div className="input-group">
        <span className="input-group-addon bl" id="basic-addon1">Reps</span>
        <input type="text" className="form-control bl" placeholder="Enter the number of reps fir this exercise"></input>
      </div>
    </div>
    
    <div className="col-xs-12 ">
      <div className="input-group">
        <input className="form-control half bl" placeholder="Select a unit and enter a value"></input>
        <select className="form-control half bl">
          <option>kg</option>
          <option>lbs</option>
          <option>meter</option>
        </select>
        <span className="input-group-addon bl add" id="basic-addon1"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></span>
        <span className="input-group-addon bl" id="basic-addon1"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></span>
      </div>
    </div>
    <div className="col-xs-12">
      <div className="h btn-group" role="group" aria-label="...">
        <button type="button" className="d bl btn btn-default">New Set</button>
        <button type="button" className="f bl btn btn-default">Copy Set</button>
        <button type="button" className="d bl btn btn-default">Delete Set</button>
      </div>
    </div>
  </div>
      </div>
    );
  }
});
