var React = require("react");
var ReactDOM = require("react-dom");
App = React.createFactory(require("../../../components/exerciseApp"));

const initialState = window.__INITIAL_STATE__;

if (typeof window !== "undefined") {
  window.onload = function() {
    ReactDOM.render(App({ data: initialState }), document.getElementById("content"));
  };
}
