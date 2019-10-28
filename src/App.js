import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import Beer from "./Beer"
import './App.css';
import BeerDisplay from './BeerDisplay';

function App() {
  return (
    <div className="App">
      <Container>
     <Route exact path = "/" component={Beer}/>
     </Container>
    </div>
  );
}

export default App;
