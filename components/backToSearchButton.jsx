var React = require("react");

const BackToSearchButton = (text, setVisiblePanel) => {
  return{
    <button class="btn btn-default" onClick={setVisiblePanel}
      {text}
    </button>
  }
}

export default BackToSearchButton
