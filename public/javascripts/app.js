var React = require("react"),
  ReactDOM = require("react-dom"),
  App = React.createFactory(require("../../components/exerciseSearchList"));

if (typeof window !== "undefined") {
  window.onload = function() {
    ReactDOM.render(App({data:[{'name':'yolo'},{'name':'yolo2'},{'name':'yolo3'}]}), document.getElementById("content"));
  };
}
