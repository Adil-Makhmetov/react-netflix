import './login.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/authSlice";

export default () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(login(form));
  }

  return (
    <div className="login">
      <form>
        <input type="email" name='email' placeholder="Login" className="login__input" onChange={handleChange}/>
        <input type="password" name='password' placeholder="Password" className="login__password" onChange={handleChange}/>
        <button className="login__action" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}