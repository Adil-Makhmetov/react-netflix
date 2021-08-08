import './edituser.scss';
import noAvatar from '../../assets/images/default-avatar.png';
import {Link, useLocation} from 'react-router-dom';
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import {useState} from "react";

export default () => {
  const {user} = useLocation();
  const [form, setForm] = useState({});

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  console.log(form);

  return (
    <div className='user'>
      <div className="user__header">
        <h1 className="user__title">Edit User</h1>
      </div>
      <div className="user__body wss-container-stretch">
        <div className="user-show wss-col-4">
          <div className="user-show-top">
            <img src={ user.profilePic || noAvatar } alt="" className="user__img"/>
            <div className="user__title">
              <span className="user__name">{ user.username }</span>
              <span className="user__job">{ user.isAdmin ? 'Admin' : 'Member' }</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user__info-title">Account Details</span>
            <div className="user__info">
              <PermIdentity className='user__icon'/>
              <span className="user__value">{ user.username }</span>
            </div>
            <div className="user__info">
              <CalendarToday className='user__icon'/>
              <span className="user__value">10.12.1999</span>
            </div>
            <span className="user__info-title">Contact Details</span>
            <div className="user__info">
              <PhoneAndroid className='user__icon'/>
              <span className="user__value">+1 123 456 67</span>
            </div>
            <div className="user__info">
              <MailOutline className='user__icon'/>
              <span className="user__value">{ user.email }</span>
            </div>
            <div className="user__info">
              <LocationSearching className='user__icon'/>
              <span className="user__value">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user-update wss-col-8">
          <span className="user-update__title">Edit</span>
          <form className="user-update__form">
            <div className="user-update__form-left">
              <div className="user-update__field">
                <label>Username</label>
                <input type="text" name='username' placeholder='John' onInput={handleChange}/>
              </div>
              <div className="user-update__field">
                <label>Full Name</label>
                <input type="text" name='fullname' placeholder='John Doe' onInput={handleChange}/>
              </div>
              <div className="user-update__field">
                <label>Phone</label>
                <input type="text" name='phone' placeholder='+1 123 456 67' onInput={handleChange}/>
              </div>
              <div className="user-update__field">
                <label>Email</label>
                <input type="text" name='email' placeholder='annabeck99@gmail.com' onInput={handleChange}/>
              </div>
              <div className="user-update__field">
                <label>Address</label>
                <input type="text" name='address' placeholder='New York | USA' onInput={handleChange}/>
              </div>
            </div>
            <div className="user-update__form-right">
              <div className="user-update__upload">
                <img src={ user.profilePic || noAvatar } alt="" className="user-update__img"/>
                <label htmlFor="photo">
                  <Publish className='user-update__icon'/>
                </label>
                <input id='photo' type="file" style={{display: 'none'}}/>
              </div>
              <button className="user-update__action">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}