import './editmovie.scss';
import {Link, useLocation} from 'react-router-dom';
import {Publish} from "@material-ui/icons";

export default () => {
  const {movie} = useLocation();

  return (
    <div className='movie'>
      <div className="movie__header">
        <h1 className="movie__title">Edit Movie</h1>
      </div>
      <div className="movie__body wss-container-stretch">
        <div className="movie-top-right wss-col-12">
          <div className="movie__title">
            <img src={movie.img} alt="Movie Poster" className="movie__img"/>
            <span className="movie__name">{movie.title}</span>
          </div>
          <div className="movie-info">
            <div className="movie-info__item">
              <span className="movie-info__key">id:</span>
              <span className="movie-info__value">{movie._id}</span>
            </div>
            <div className="movie-info__item">
              <span className="movie-info__key">genre:</span>
              <span className="movie-info__value">{movie.genre}</span>
            </div>
            <div className="movie-info__item">
              <span className="movie-info__key">year:</span>
              <span className="movie-info__value">{movie._id}</span>
            </div>
            <div className="movie-info__item">
              <span className="movie-info__key">limit</span>
              <span className="movie-info__value">{movie.limit}</span>
            </div>
          </div>
        </div>
        <div className="movie-bottom wss-col-12">
          <form className="movie__form">
            <div className="movie__form-left">
              <div className="movie__field">
                <label>Movie Title</label>
                <input type="text" placeholder={movie.title}/>
              </div>
              <div className="movie__field">
                <label>Year</label>
                <input type="text" placeholder={movie.year}/>
              </div>
              <div className="movie__field">
                <label>Limit</label>
                <input type="number" placeholder={movie.limit}/>
              </div>
              <div className="movie__field">
                <label>Trailer</label>
                <input type="file" placeholder={movie.trailer}/>
              </div>
              <div className="movie__field">
                <label>Video</label>
                <input type="file" placeholder={movie.video}/>
              </div>
              <div className="movie__field">
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="movie__field">
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="movie__form-right">
              <div className="movie__upload">
                <div><img src={movie.img} alt='Movie Poster'/></div>
                <label htmlFor="photo">
                  <Publish className='movie__icon'/>
                </label>
                <input id='photo' type="file" style={{display: 'none'}}/>
              </div>
              <button className="movie__action">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}