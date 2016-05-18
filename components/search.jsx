var React = require("react");

module.exports = React.createClass({
  render() {
    return (
      <div className="search-component">
        <div className="input-group">
          <span className="input-group-addon border-radius-1" id="basic-addon1"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></span>
          <input onChange={this.props.changeSearch} type="text" className="form-control border-radius-1" placeholder="Search" />
        </div>
      </div>
    );
  },
});

