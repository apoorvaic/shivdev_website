import React from 'react';
import Home from './components/Home.js'
import About from './components/About.js'
import Error from './components/Error.js'
import {Route,Switch} from 'react-router-dom'
import Header from './components/Header.js'

//import './App.css';

function App() {
  return (
      <div>
    <Header />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about/" component = {About} />
        <Route component = {Error} />
      </Switch>
      
       
      </div>
     
   
  );
}

export default App;