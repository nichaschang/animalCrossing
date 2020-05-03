import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './page/Home'
import Illustrate from './page/Illustrate'
import Header from './component/Header'

function App() {
  return (
    <Router>
      <Header />
    <div className="basic-bg">
        <Switch>
          <Route exact path="/home" >
            <Home />  
          </Route>
          <Route path="/Illustrate" >
            <Illustrate />  
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
