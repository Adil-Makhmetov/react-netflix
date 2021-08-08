import './chart.scss'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default ({title, data, dataKey, grid, className = ''}) => {
  return (
    <div className={`chart ${className}`}>
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550BD" />
          <Line dataKey={dataKey} stroke="#5550BD" type="monotone"/>
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}