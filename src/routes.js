import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import Read from './pages/Read';
import ToRead from './pages/ToRead';


 
export default function Routes() {
 return (
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/read" exact component={Read} />
      <Route path="/toread" exact component={ToRead} />
   </Switch>
 );
}