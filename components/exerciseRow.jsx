var React = require("react");

module.exports = React.createClass({
  render() {
    return (
      <div className="exerciseRow">
        {this.props.name} - {this.props.visible.toString()}
      </div>
    );
  }
});
