import './newmovie.scss';
import {useContext, useState} from "react";
import storage from "../../firebase";
import MovieApiCalls from "../../context/movie/MovieApiCalls";
import {MovieContext} from "../../context/movie/MovieContext";

export default () => {
  const [movie, setMovie] = useState({});
  const [img, setImg] = useState(null);
  const [imgPoster, setImgPoster] = useState(null);
  const [imgLogo, setImgLogo] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const {dispatch} = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value})
  }

  const upload = items => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on("state_changed", snapshot => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(`Upload is ${progress} Done`);
      }, err => {
        console.log(err);
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          setMovie(prev => ({ ...prev, [item.label]: url }));
          setUploaded(prev => prev + 1);
        })
      })
    })
  }

  const handleUpload = e => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgPoster, label: "imgPoster" },
      { file: imgLogo, label: "imgLogo" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    MovieApiCalls.createMovie(movie, dispatch);
  }

  return (
    <div className="new-movie">
      <h1 className="new-movie__title">New Product</h1>
      <form className='new-movie__form'>
        <div className="new-movie__item">
          <label>Title Image</label>
          <input type="file" id='img' onChange={e=>setImg(e.target.files[0])}/>
        </div>
        <div className="new-movie__item">
          <label>Poster Image</label>
          <input type="file" name='img' id='imgPoster' onChange={e=>setImgPoster(e.target.files[0])}/>
        </div>
        <div className="new-movie__item">
          <label>Film Logo</label>
          <input type="file" name='imgLogo' id='imgLogo' onChange={e=>setImgLogo(e.target.files[0])}/>
        </div>
        <div className="new-movie__item">
          <label>Title</label>
          <input type="text" name='title' placeholder='Title' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Description</label>
          <input type="text" name='desc' placeholder='Description' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Year</label>
          <input type="text" name='year' placeholder='Year' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Limit</label>
          <input type="number" name='limit' placeholder='Limit' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Genre</label>
          <input type="text" name='genre' placeholder='Genre' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Duration</label>
          <input type="text" name='duration' placeholder='Duration' onChange={handleChange}/>
        </div>
        <div className="new-movie__item">
          <label>Is Series?</label>
          <select className="new-movie__select" name="isSeries" id="isSeries">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="new-movie__item">
          <label>Trailer</label>
          <input type="file" name='trailer' placeholder='Trailer' onChange={e=>setTrailer(e.target.files[0])}/>
        </div>
        <div className="new-movie__item">
          <label>Video</label>
          <input type="file" name='video' placeholder='Video' onChange={e=>setVideo(e.target.files[0])}/>
        </div>
        { uploaded === 5
          ? (<button className="new-movie__action" onClick={handleSubmit}>Create</button>)
          : <button className="new-movie__action" onClick={handleUpload}>Upload</button>
        }
      </form>
    </div>
  )
}