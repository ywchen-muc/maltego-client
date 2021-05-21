import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Graphpage from '../pages/Graphpage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        {/* <Route path="/:id">
          <Graphpage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;