import './watch.scss'
import {ArrowBackOutlined} from "@material-ui/icons";
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import httpMovies from "../../http/moviesApi";

const Watch = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(async () => {
    try {
      const res = await httpMovies.getMovie(id);
      setMovie(res.data);
    } catch (e) { console.log(e); }
  }, []);

  return (
    <div className="watch">
      <Link className="back" to='/'>
        <ArrowBackOutlined/> Home
      </Link>
      <video src={movie.video} autoPlay progress='true' controls loop />
    </div>
  )
}

export default Watch;