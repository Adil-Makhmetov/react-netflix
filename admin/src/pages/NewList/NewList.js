import './newlist.scss';
import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import MovieApiCalls from "../../context/movie/MovieApiCalls";
import ListApiCalls from "../../context/list/ListApiCalls";
import {MovieContext} from "../../context/movie/MovieContext";
import {ListContext} from "../../context/list/ListContext";

export default () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch: dispatchList } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    MovieApiCalls.getMovies(dispatchMovie);
  }, [dispatchMovie])

  const handleChange = e => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value});
  }

  const handleSelect = e => {
    const value = Array.from(e.target.selectedOptions).map( option => option.value );
    setList({ ...list, [e.target.name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    ListApiCalls.createList(list, dispatchList);
    history.push('/lists')
  }


  console.log(list)

  return (
    <div className="new-movie">
      <h1 className="new-movie__title">New Product</h1>
      <form className='new-movie__form'>
        <div className="new-movie__item">
          <label>Title</label>
          <input type="text" name='title' placeholder='Popular Movies' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Genre</label>
          <input type="text" name='genre' placeholder='Genre' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Type</label>
          <select className="new-movie__select" name="type" id="type" onChange={handleChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="new-movie__item">
          <label>Content</label>
          <select multiple={true} className="new-movie__select multi" name="content" id="type" onChange={handleSelect}>
            { movies.map(movie => <option key={movie._id} value={movie._id}>{movie.title}</option>) }
          </select>
        </div>
        <button className="new-movie__action" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}