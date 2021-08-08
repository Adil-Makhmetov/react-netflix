import './editlist.scss';
import {useLocation} from 'react-router-dom';

export default () => {
  const {list} = useLocation();

  return (
    <div className='list'>
      <div className="list__header">
        <h1 className="list__title">Edit List</h1>
      </div>
      <div className="list__body wss-container-stretch">
        <div className="list-top-right wss-col-12">
          <div className="list__title">
            <span className="list__name">{list.title}</span>
          </div>
          <div className="list-info">
            <div className="list-info__item">
              <span className="list-info__key">id:</span>
              <span className="list-info__value">{list._id}</span>
            </div>
            <div className="list-info__item">
              <span className="list-info__key">genre:</span>
              <span className="list-info__value">{list.genre}</span>
            </div>
            <div className="list-info__item">
              <span className="list-info__key">type:</span>
              <span className="list-info__value">{list.type}</span>
            </div>
          </div>
        </div>
        <div className="list-bottom wss-col-12">
          <form className="list__form">
            <div className="list__form-left">
              <div className="list__field">
                <label>List Title</label>
                <input type="text" placeholder={list.title}/>
              </div>
              <div className="list__field">
                <label>Genre</label>
                <input type="text" placeholder={list.genre}/>
              </div>
              <div className="list__field">
                <label>Type</label>
                <input type="text" placeholder={list.type}/>
              </div>
            </div>
            <div className="list__form-right">
              <button className="list__action">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}