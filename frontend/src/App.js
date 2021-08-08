import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import {useSelector} from "react-redux";

const App = () => {
  const user = useSelector(state => state.userReducer.user);
  return (
    <Router>
      <Switch>
        <Route path="/login"><Login/></Route>
        <Route path="/register">
          {user ? <Redirect to='/'/> : <Register/>}
        </Route>
        <Route path="/movies">{user ? <Home type='movies'/> : <Redirect to='/register'/>}</Route>
        <Route path="/series">{user ? <Home type='series'/> : <Redirect to='/register'/>}</Route>
        <Route path="/watch/:id">{user ? <Watch/> : <Redirect to='/register'/>}</Route>
        <Route path="/">{user ? <Home/> : <Redirect to='/register'/>}</Route>
      </Switch>
    </Router>
  );
}

export default App;