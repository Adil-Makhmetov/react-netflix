import './topbar.scss';
import {NotificationsNone, Language, Settings, ExitToApp} from "@material-ui/icons";
import {useContext} from "react";
import {AuthContext} from "../../context/auth/AuthContext";
import AuthApiCalls from "../../context/auth/AuthApiCalls";

export default () => {
  const { dispatch } = useContext(AuthContext);

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
          <ExitToApp onClick={AuthApiCalls.logout.bind(this, dispatch)}/>
        </div>
      </div>
    </div>
  )
}