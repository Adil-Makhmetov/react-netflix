import './listItem.scss';
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, Timelapse} from "@material-ui/icons";
import {useEffect, useState} from "react";
import httpMovies from '../../http/moviesApi';
import {Link} from "react-router-dom";

const ListItem = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(async () => {
    try {
      const res = await httpMovies.getMovie(id);
      setMovie(res.data);
    } catch (e) { console.log(e); }
  }, []);

  return (
  <Link className="list-item" to={`/watch/${movie._id}`}
       onMouseEnter={setIsHovered.bind(this, true)}
       onMouseLeave={setIsHovered.bind(this, false)}
  >
    <img src={movie.imgPoster}
         alt=""/>
    { isHovered && (
      <video autoPlay muted loop>
        <source src={movie.trailer}/>
      </video>
    ) }
    <div className="list-item__info">
      <div className="list-item__icons">
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownOutlined className="icon"/>
      </div>
      <div className="list-item__advanced">
        <div className="list-item__duration">
          <Timelapse className="icon"/>
          <span>{movie.duration}</span>
        </div>
      </div>
      <div className="list-item__description">
        {movie.desc}
      </div>
      <div className="list-item__advanced">
        <span className="list-item__limit">+{movie.limit}</span>
        <span className="list-item__year">{movie.year}</span>
      </div>
    </div>
  </Link>
  )
}

export default ListItem;