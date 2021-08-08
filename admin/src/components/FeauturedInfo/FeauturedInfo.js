import './feauturedinfo.scss';
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default () => {
  return (
    <div className="feautured">
      <div className="feautured__item">
        <span className="feautured__title">Revanue</span>
        <div className="feautured__money">
          <span className="feautured__price">$2,415</span>
          <span className="feautured__rate">
            -11.4 <ArrowDownward className='feautured__icon negative'/>
          </span>
        </div>
        <span className="feautured__sub">Compared to last month</span>
      </div>
      <div className="feautured__item">
        <span className="feautured__title">Sales</span>
        <div className="feautured__money">
          <span className="feautured__price">$4,415</span>
          <span className="feautured__rate">
            -1.4 <ArrowDownward className='feautured__icon negative'/>
          </span>
        </div>
        <span className="feautured__sub">Compared to last month</span>
      </div>
      <div className="feautured__item">
        <span className="feautured__title">Cost</span>
        <div className="feautured__money">
          <span className="feautured__price">$2,225</span>
          <span className="feautured__rate">
            +2.4 <ArrowUpward className='feautured__icon positive'/>
          </span>
        </div>
        <span className="feautured__sub">Compared to last month</span>
      </div>
    </div>
  )
}