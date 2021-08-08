import './login.scss';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/auth/AuthContext";
import AuthApiCalls from '../../context/auth/AuthApiCalls';

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    AuthApiCalls.login({email, password}, dispatch);
  }

  return (
    <div className="login">
      <form>
        <input type="text" placeholder="Login" className="login__input" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="login__password" onChange={e => setPassword(e.target.value)}/>
        <button className="login__action" onClick={handleLogin} disabled={isFetching}>Login</button>
      </form>
    </div>
  )
}