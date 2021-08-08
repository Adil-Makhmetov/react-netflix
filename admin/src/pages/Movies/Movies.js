import './movies.scss';
import noAvatar from '../../assets/images/default-avatar.png'
import Table from '../../components/Table/Table';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {MovieContext} from "../../context/movie/MovieContext";
import MovieApiCalls from "../../context/movie/MovieApiCalls";

export default () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    MovieApiCalls.getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: '100px'},
    {
      field: 'movie',
      headerName: 'Movie',
      width: '150px',
      renderCell: (row, value) => (
        <div className='movie-cell'>
          <img src={row.img ? row.img : noAvatar}
               alt="avatar"/>
          <span>{row.title}</span>
        </div>
      )
    },
    { field: 'desc', headerName: 'Description'},
    { field: 'trailer', headerName: 'Trailer' },
    { field: 'video', headerName: 'Video' },
    { field: 'year', headerName: 'Year', width: '60px' },
    { field: 'limit', headerName: 'Limit', width: '60px' },
    { field: 'genre', headerName: 'Genre', width: '100px' },
    {
      field: 'isSeries',
      headerName: 'Is Series',
      width: '70px',
      renderCell: (row) => row.isSeries ? 'Yes' : 'No',
    },
    {
      field: 'action',
      headerName: 'Action',
      width: '110px',
      renderCell: (row) => (
        <div className='actions'>
          <Link to={{pathname: `/movie/${row._id}`, movie: row}}>
            <button className="action-edit">Edit</button>
          </Link>
          <DeleteOutline
            className="action-delete"
            onClick={ MovieApiCalls.deleteMovie.bind(this, row._id, dispatch) }
          />
        </div>
      )
    },
  ];

  return (
    <div className="movies">
      <div className="movies__header">
        <Link to='/new-movie' >
          <button className="movie__add">Create</button>
        </Link>
      </div>
      <Table
        rows={movies}
        cols={columns}
        height={'808px'}
        rowKey='_id'
      />
    </div>
  )
}
