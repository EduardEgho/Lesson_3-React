import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {legacy_createStore as createStore} from 'redux';
import {Provider} from "react-redux";

const defaultCounter = {
    counter:0
}

const counterReducer = (state = defaultCounter, action) => {
    switch (action.type) {
        case 'increment':
            return{counter:state.counter +1}
        case 'decrement':
            return {counter: state.counter -1}
        default:
            return state
    }
}

const store = createStore(counterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>
)

