import './lists.scss';
import Table from '../../components/Table/Table';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {ListContext} from "../../context/list/ListContext";
import ListApiCalls from "../../context/list/ListApiCalls";

export default () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    ListApiCalls.getLists(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: '100px' },
    { field: 'title', headerName: 'Title' },
    { field: 'genre', headerName: 'Genre', width: '100px' },
    { field: 'type', headerName: 'Type' },
    {
      field: 'action',
      headerName: 'Action',
      width: '110px',
      renderCell: (row) => (
        <div className='actions'>
          <Link to={{pathname: `/list/${row._id}`, list: row}}>
            <button className="action-edit">Edit</button>
          </Link>
          <DeleteOutline
            className="action-delete"
            onClick={ ListApiCalls.deleteList.bind(this, row._id, dispatch) }
          />
        </div>
      )
    },
  ];

  return (
    <div className="lists">
      <div className="lists__header">
        <Link to='/new-list' >
          <button className="lists__add">Create</button>
        </Link>
      </div>
      <Table
        rows={lists}
        cols={columns}
        height={'808px'}
        rowKey='_id'
      />
    </div>
  )
}
