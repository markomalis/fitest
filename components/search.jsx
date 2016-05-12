var React = require("react");

module.exports = React.createClass({
  render() {
    return (
      <div className="search-component">
        <input type="text" onChange={this.props.changeSearch} />
        <span>You are searching for: {this.props.search}</span>
      </div>
    );
  },
});

