import Logo from "../../assets/logo.svg";
import './login.scss'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from '../../redux/userSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const history = useHistory();

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(login(form));
    history.push('/');
  }

  return (
    <div className="login">
      <header className="header wss-container-inline">
        <img className="logo" src={Logo} alt="Logo"/>
      </header>
      <main className="login__body">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input type="email" name='email' placeholder="Email or phone number" onChange={handleChange}/>
          <input type="password" name='password' placeholder="Password" onChange={handleChange}/>
          <button className="login__button">Sign In</button>
          <span>New to Netflix? <b onClick={() => { history.push('/register') }}>Sign Up now.</b></span>
          <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b></small>
        </form>
      </main>
    </div>
  )
}

export default Login;