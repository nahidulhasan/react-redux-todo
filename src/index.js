import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { devToolsEnhancer } from 'redux-devtools-extension';
 
import registerServiceWorker from './registerServiceWorker';


let store = createStore(todoApp, devToolsEnhancer());
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
