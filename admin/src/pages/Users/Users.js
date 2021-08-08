import './users.scss';
import noAvatar from '../../assets/images/default-avatar.png'
import Table from '../../components/Table/Table';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/user/UserContext";
import UserApiCalls from "../../context/user/UserApiCalls";

export default () => {
  const {users, dispatch} = useContext(UserContext);

  useEffect(() => {
    UserApiCalls.getUsers(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID' },
    {
      field: 'username',
      headerName: 'User',
      renderCell: (row, value) => {
        return (
          <div className='user-cell'>
            <img src={row.profilePic ? row.profilePic : noAvatar}
                 alt="avatar"/>
            <span>{value}</span>
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email'},
    {
      field: 'isAdmin',
      headerName: 'Status',
      renderCell: row => ( row.isAdmin ? 'Admin' : 'Member'),
    },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (row) => (
        <div className='actions'>
          <Link to={{ pathname: `/user/${row._id}`, user: row }}>
            <button className="action-edit">Edit</button>
          </Link>
          <DeleteOutline
            className="action-delete"
            onClick={ UserApiCalls.deleteUser.bind(this, row._id, dispatch) }
          />
        </div>
      )
    },
  ];

  return (
    <div className="users">
      <div className="users__header">
        <Link to='/new-user' >
          <button className="user__add">Create</button>
        </Link>
      </div>
      <Table
        rows={users}
        cols={columns}
        height={'808px'}
      />
    </div>
  )
}
