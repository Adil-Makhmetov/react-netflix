import './home.scss';

import FeauturedInfo from "../../components/FeauturedInfo/FeauturedInfo";
import Chart from "../../components/Chart/Chart";
import Members from "../../components/Members/Members";
import Transactions from "../../components/Transactions/Transactions";
import {useEffect, useMemo, useState} from "react";

import UserApiCalls from "../../context/user/UserApiCalls";

export default () => {
  const MONTHS = useMemo(() => [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Nov', 'Dec'
  ], []);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    UserApiCalls.getStats()
      .then(res => {
        res.data.map(item => setUserStats(prev => [
          ...prev, { name: MONTHS[item._id-1], "New User": item.total }
        ]));
      })
      .catch(e => { console.log(e); })
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeauturedInfo/>
      <Chart data={userStats} dataKey='New User' title='User Analytics' grid/>
      <div className="wss-container-stretch">
        <Members className='wss-col-4'/>
        <Transactions className='wss-col-8'/>
      </div>
    </div>
  )
}