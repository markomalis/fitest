var React = require("react");
var Search = require("./search");
var DetailPanel = require("./detailPanel");
var ExerciseList = require("./exerciseSearchList");
var ExerciseDetail = require("./exerciseDetail");

module.exports = React.createClass({
  getInitialState() {
    return {
      detail : {}
    };
  },
  render() {
    return (
      <div className="col-xs-12">
        <div className="row">
          <ExerciseList exercises={this.props.data} exerciseDetail={this.exerciseDetail} />
          <DetailPanel>
            <ExerciseDetail exercise={this.state.detail} visible={true} />
          </DetailPanel>
        </div>
      </div>
    );
  },
  exerciseDetail(exercise) {
    this.setState({detail: exercise});
  }
});
