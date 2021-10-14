import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers' 
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from './rootEpic';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware(); 


  const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(epicMiddleware)
    // other store enhancers if any
  ))

  epicMiddleware.run(rootEpic);
  return store;
};