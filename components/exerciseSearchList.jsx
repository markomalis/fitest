var React = require("react");
var Search = require("./search");
var ExerciseRow = require("./exerciseRow");

module.exports = React.createClass({
  getInitialState() {
    var exs = this.props.data.map(function(ex){
      ex.visible = true;
      return ex;
    });
    return {
      search: "",
      exercises: exs
    };
  },
  render() {
    var exerciseRows = this.state.exercises.map(function(e){
        return <ExerciseRow name={e.name} visible={e.visible} />
    });
  
    return (
      <div className="exercise-search">
        <Search search={this.state.search} changeSearch={this.changeSearch} />
        {exerciseRows}
      </div>
    );
  },
  changeSearch(event) {
    var text = event.target.value;
    
    var exs = this.state.exercises.map(function(e){
        (e.name.indexOf(text)==-1) ? e.visible = false : e.visible = true;
        return e;
    });
    
    this.setState({
      search: text,
      exercises: exs
    });
  }
});


