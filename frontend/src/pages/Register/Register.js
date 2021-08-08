import Logo from '../../assets/logo.svg';
import './register.scss'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import userApi from '../../http/authApi';

export const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);

  const history = useHistory();

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleFinish = async e => {
    e.preventDefault();
    const { username, email, password } = form;
    await userApi.register(username, email, password, dispatch);
    history.push('/login');
  }

  return (
    <div className="register">
      <header className="header wss-container-inline">
        <img className="logo" src={Logo} alt="Logo"/>
        <button className="header__login-btn" onClick={() => { history.push('/login') }}>Sign In</button>
      </header>
      <main className="register__body">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {!step ? (
            <div className="register__inputs">
              <input type="email" name='email' placeholder="Email Address" onChange={handleChange}/>
              <button className="register__btn" onClick={() => { setStep(1) }}>Get Started</button>
            </div>
          ) : (
            <form className="register__inputs">
              <input type="text" name='username' placeholder="User Name" onChange={handleChange}/>
              <input type="password" name='password' placeholder="Password" onChange={handleChange}/>
              <button className="register__btn" onClick={handleFinish}>Start Membership</button>
            </form>
          )}
      </main>
    </div>
  )
}

export default Register;