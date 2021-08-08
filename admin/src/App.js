import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import NewMovie from './pages/NewMovie/NewMovie';
import EditMovie from './pages/EditMovie/EditMovie';
import Users from './pages/Users/Users';
import EditUser from './pages/EditUser/EditUser';
import NewUser from './pages/NewUser/NewUser';
import Lists from './pages/Lists/Lists';
import EditList from './pages/EditList/EditList';
import NewList from './pages/NewList/NewList';

import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';

import {useContext} from "react";
import {AuthContext} from "./context/auth/AuthContext";

export default () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      <Route path='/login'>{ user ? <Redirect to='/'/> : <Login/> }</Route>
      { user ? (
        <>
          <Sidebar/>
          <main className="main">
            <TopBar/>
            <Route exact path='/'><Home/></Route>
            <Route path='/users'><Users/></Route>
            <Route path='/user/:userId'><EditUser/></Route>
            <Route path='/new-user'><NewUser/></Route>
            <Route path='/movies'><Movies/></Route>
            <Route path='/movie/:movieId'><EditMovie/></Route>
            <Route path='/new-movie'><NewMovie/></Route>
            <Route path='/lists'><Lists/></Route>
            <Route path='/list/:listId'><EditList/></Route>
            <Route path='/new-list'><NewList/></Route>
          </main>
        </>
      ) :  <Route path='/'><Redirect to='/login'/></Route>}
      </Switch>
    </Router>
  )
}