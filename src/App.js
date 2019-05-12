import React, { useState, createContext } from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Money from './pages/Money';
import Memo from './pages/Memo';
export const TextContext = createContext();
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  const value = 'aaaa';
  return (
    
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/money' component={Money} />
        <Route path='/memo' component={Memo} />
      </Switch>
    
      </Router>
  );
}

export default App;
