import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "../../../components/exerciseApp"

const initialState = window.__INITIAL_STATE__;

let store = createStore(todoApp, 
  {
    detail: -1,
    exercises: initialState,
    visiblePanel: "list"
  }
)

if (typeof window !== "undefined") {
  window.onload = function() {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("content")
    );
  };
}
