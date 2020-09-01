import React from 'react';
import {  Switch, Route} from 'react-router-dom'
import DashboardPage from './pages/Dashboard';
function App() {
  return (
    <Switch>
      <Route exact path='/dashboard' component={DashboardPage}/>
    </Switch>
  );
}

export default App;
