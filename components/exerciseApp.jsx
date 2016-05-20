var React = require("react");
import ExerciseDetail from '../containers/ExerciseDetail'
import ExerciseSearch from '../containers/ExerciseSearch'

module.exports = React.createClass({
  render() {
    return (
      <div className="col-xs-12">
        <div className="row">
          <ExerciseSearch />
          <ExerciseDetail />
        </div>
      </div>
    );
  }
});
