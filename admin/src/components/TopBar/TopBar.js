import './topbar.scss';
import {NotificationsNone, Language, Settings, ExitToApp} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import authApi from "../../http/authApi";

export default () => {
  const dispatch = useDispatch();

  return (
    <div className='topbar'>
      <div className="topbar__icons">
        <div className="icon-notice">
          <NotificationsNone/>
          <span className="icon-notice__amount">2</span>
        </div>
        <div className="icon-notice">
          <Language/>
          <span className="icon-notice__amount">2</span>
        </div>
        <div className="icon-notice">
          <Settings/>
        </div>
        <div className="icon-notice">
          <ExitToApp onClick={authApi.logout.bind(this, dispatch)}/>
        </div>
      </div>
    </div>
  )
}