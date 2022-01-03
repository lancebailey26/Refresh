import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigaton/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route exact path='/' >
          <Users />
        </Route>
      <Route exact path="/:userId/places">
        <UserPlaces />
      </Route>
      <Route exact path='/places/new'>
      <NewPlace />  
      </Route>
      
      </Switch>
      </main>
    </Router>
  );
}

export default App;
