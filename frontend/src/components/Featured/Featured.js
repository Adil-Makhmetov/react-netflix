import './featured.scss';
import {PlayCircleFilled, Info} from "@material-ui/icons";
import {useEffect, useState} from "react";
import httpMovies from '../../http/moviesApi';

const Feautured = ({type, genre}) => {
  const [content, setContent] = useState({});
  const [_genre, _setGenre] = useState(genre);

  useEffect(async () => {
    try {
      const res = await httpMovies.getRandom({
        type: type, genre: _genre,
      });
      setContent(res.data[0] ? res.data[0] : []);
    } catch (e) { console.log(e); }
  }, [_genre]);

  const updateFeauturedMovie = e => {
    _setGenre(e.target.value);
  }

  return (
    <div className="feautured">
      { type && (
        <div className="feautured__category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={updateFeauturedMovie}>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="feautured__info">
        <img className="feautured__image" src={content.imgLogo} alt=""/>
        <p className="feautured__description">{ content.desc }</p>
        <div className="feautured__buttons">
          <button className="feautured__button feautured__button_play">
            <PlayCircleFilled/>
            <span>Play</span>
          </button>
          <button className="feautured__button feautured__button_more">
            <Info/>
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feautured;