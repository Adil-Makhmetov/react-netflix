import './sidebar.scss';
import logo from '../../assets/images/logo.svg';
import {
  AttachMoney, ChatBubbleOutlineOutlined,
  DynamicFeedOutlined,
  LineStyle, List,
  MailOutline,
  Person, PlayCircleOutlineOutlined, Report,
  Timeline,
  TrendingUp, WorkOutlineOutlined
} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={logo} alt="WSSSite Logotype" className="logo__img"/>
        <div className="logo__text">
          <div className="logo__company">WSSite</div>
          <div className="logo__target">Pro-Development</div>
        </div>
      </div>
      <div className="sidebar__menus">
        <nav className="sidebar__menu">
          <div className="sidebar__menu-title">Dashboard</div>
          <Link to='/' className="sidebar__menu-item">
            <LineStyle/>
            <span>Home</span>
          </Link>
          <div className="sidebar__menu-item">
            <Timeline/>
            <span>Analytics</span>
          </div>
          <div className="sidebar__menu-item">
            <TrendingUp/>
            <span>Sales</span>
          </div>
        </nav>
        <nav className="sidebar__menu">
          <div className="sidebar__menu-title">Quick Menu</div>
          <Link to='/users' className="sidebar__menu-item">
            <Person/>
            <span>Users</span>
          </Link>
          <Link to='/movies' className="sidebar__menu-item">
            <PlayCircleOutlineOutlined/>
            <span>Movies</span>
          </Link>
          <Link to='/lists' className="sidebar__menu-item">
            <List/>
            <span>Lists</span>
          </Link>
          <div className="sidebar__menu-item">
            <TrendingUp/>
            <span>Transactions</span>
          </div>
          <div className="sidebar__menu-item">
            <AttachMoney/>
            <span>Reports</span>
          </div>
        </nav>
        <nav className="sidebar__menu">
          <div className="sidebar__menu-title">Notifications</div>
          <div className="sidebar__menu-item">
            <MailOutline/>
            <span>Mail</span>
          </div>
          <div className="sidebar__menu-item">
            <DynamicFeedOutlined/>
            <span>Feedback</span>
          </div>
          <div className="sidebar__menu-item">
            <ChatBubbleOutlineOutlined/>
            <span>Messages</span>
          </div>
        </nav>
        <nav className="sidebar__menu">
          <div className="sidebar__menu-title">Staff</div>
          <div className="sidebar__menu-item">
            <WorkOutlineOutlined/>
            <span>Manage</span>
          </div>
          <div className="sidebar__menu-item">
            <Timeline/>
            <span>Analytics</span>
          </div>
          <div className="sidebar__menu-item">
            <Report/>
            <span>Reports</span>
          </div>
        </nav>
      </div>
    </div>
  )
}