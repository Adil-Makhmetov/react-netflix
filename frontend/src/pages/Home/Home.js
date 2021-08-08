import './home.scss';

import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import {useEffect, useState} from "react";
import httpLists from "../../http/listsApi";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre] = useState(null);

  useEffect(async () => {
    try {
      const res = await httpLists.getLists({type: type || ''});
      setLists(res.data);
    } catch (e) { console.log(e); }
    finally {
      return () => {};
    }
  },[type]);
  return (
    <div className="home">
      <Navbar/>
      <Featured type={type} genre={genre}/>
      { lists.map(list => (<List key={list._id} list={list} slidesPerView={4} slidesPerGroup={1} spaceBetween={10}/>)) }
    </div>
  )
}

export default Home;