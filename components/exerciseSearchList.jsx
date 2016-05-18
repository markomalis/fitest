var React = require("react");
var Search = require("./search");
var ExerciseRow = require("./exerciseRow");

module.exports = React.createClass({
  getInitialState() {
    var exs = this.props.exercises.map(function(e){
      e.visible = true;
      return e;
    });
    
    exs = exs.sort(this.sortByName);
  
    return {
      exercises: exs,
      search: ""
    }
  },
  render() {
    var ed = this.props.exerciseDetail;
    var ad = this.props.addExercise;
    
    var exerciseRows = this.state.exercises.map(function(e){
        return <ExerciseRow exercise={e} exerciseDetail={ed} addExercise={ad} />
    });
  
    return (
      <div id="exercise-search" className="exercise-search col-xs-12 col-sm-6">
        <Search search={this.state.search} changeSearch={this.changeSearch} />
        {exerciseRows}
      </div>
    );
  },
  sortByName(a, b) {
    if (a.name < b.name)
      return -1;
    else if (a.name > b.name)
      return 1;
    else 
      return 0;
  },
  changeSearch(event) {
    var text = event.target.value;
    
    var exs = this.state.exercises.map(function(e){
        (e.name.toLowerCase().indexOf(text.toLowerCase())==-1) ? e.visible = false : e.visible = true;
        return e;
    });
    
    this.setState({
      search: text,
      exercises: exs
    });
  }
});


