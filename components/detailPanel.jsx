var React = require("react");

module.exports = React.createClass({
  render() {
    return (
      <div id="detail-panel" className="col-xs-12 col-sm-6 hidden-xs" >
        {this.props.children}
      </div>
    );
  }
});


