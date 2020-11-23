import './App.css';
import Header from './components/Header.component';
import Card from './components/Card.component.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact.page.jsx';
import Home from './pages/Home.page';
import axios from "axios";
import {useEffect} from 'react';



function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
      
        <Switch>
          <Route path='/Contact'>
            <Contact/>
          </Route>

          <Route path='/Page2'>
            <Contact/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
