import './members.scss';
import noAvatar from '../../assets/images/default-avatar.png'
import {Visibility} from "@material-ui/icons";
import {useContext, useEffect} from "react";

import UserApiCalls from "../../context/user/UserApiCalls";
import {UserContext} from "../../context/user/UserContext";

export default ({ className }) => {
  const {users, dispatch} = useContext(UserContext);

  useEffect(() => {
    UserApiCalls.getUsers(dispatch,{ limit: 5 });
  }, [dispatch]);

  return (
    <div className={`${className} members`}>
      <div className="members__title">New Join Members</div>
      { users.map(user => (
        <div className="member" key={user._id}>
          <img src={user.profilePic || noAvatar}
               alt="avatar"
               className="member__img"/>
          <div className="member__user">
            <span className="member__username">{ user.username }</span>
            <span className="member__email">{ user.email }</span>
          </div>
          <button className="member__expand">
            <Visibility className='member__icon'/>Display
          </button>
        </div>
      ))}
    </div>
  )
}