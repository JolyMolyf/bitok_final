import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router,  Switch, Route, Link, Redirect} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/home' component={HomePage}/>
        <Route path='*'  render={() => <Redirect to="/home" />} />
        
      </Router>
    </div>
  );
}

export default App;
