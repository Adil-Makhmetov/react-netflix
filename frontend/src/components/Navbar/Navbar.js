import Logo from "../../assets/logo.svg";
import noAvatar from '../../assets/no-avatar.png';
import './navbar.scss';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import {useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import userApi from '../../http/userApi';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 0);
    return () => (window.onscroll = null);
  }

  const handleLogout = () => {
    userApi.logout(dispatch);
  }

  const user = useSelector(state => state.userReducer.user);

  return (
    <div className={isScrolled ? "navbar navbar_scrolled wss-container-inline" : "navbar wss-container-inline"}>
      <div className="navbar__left">
        <img src={Logo} className='logo'/>
        <nav className="navbar__menu">
          <Link to='/'>Home Page</Link>
          <Link to='/series'>Series</Link>
          <Link to='/movies'>Movies</Link>
          <Link to='/'>New and Popular</Link>
          <Link to='/'>My List</Link>
        </nav>
      </div>
      <div className="navbar__right">
        <Search className='icon'/>
        <span>KID</span>
        <Notifications className='icon'/>
        <span className="navbar__username">{user.username}</span>
        <img className="navbar__avatar" src={user.profilePic || noAvatar} alt="avatar"/>
        <div className="navbar__profile-menu">
          <ArrowDropDown className='icon navbar__profile-arrow'/>
          <div className="navbar__profile-actions">
            <span>Settings</span>
            <span onClick={handleLogout}>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;