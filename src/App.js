import React from 'react';
import Home from './components/Home.js'
import About from './components/About.js'
import Error from './components/Error.js'
import {Route,Switch} from 'react-router-dom'
import Header from './components/Header.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

//import './App.css';

function App() {
  return (
      <div>
    <Header />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about/" component = {About} />
        <Route exact path = "/contact/" component = {Contact} />
      </Switch>
      <Footer />
       
      </div>
     
   
  );
}

export default App;