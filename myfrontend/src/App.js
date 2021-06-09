import React, { useCallback, useState } from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

import './App.css';
import UpdatePlace from './places/pages/UpdatePlace';
const App=() =>{

  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const login = useCallback( () => {
    setIsLoggedIn(true);
  } , [] );

  const logout = useCallback( () => {
    setIsLoggedIn(false);
  } , [] );

  let routes;

  if(isLoggedIn){
    routes=(
      <Switch>
      <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/places/:placeId" exact>
        <UpdatePlace />
      </Route>
      <Redirect to="/"/>
      </Switch>
    );
  }else
  {
    routes=(
      <Switch>
      <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route> 
      <Redirect to="/auth"/>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
    <Router>
      <MainNavigation />
      <main>
      {/* <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/places/:placeId" exact>
        <UpdatePlace />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      {/* path it should hit if any path given does not exits */}
    {/* <Redirect to='/' />  */} 
    {routes}
    </main>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
