import './table.scss';
import {useEffect, useState} from "react";

export default ({ height, cols = [], rows, rowKey }) => {
  const [_rows, _setRows] = useState([]);

  useEffect(() => {
    _setRows(rows);
  }, [rows]);

  return (
    <div className="table-wrapper" style={{height: height ? height : 'auto'}}>
      <table className="table">

        <thead>
          <tr>
            { cols.length && (
              cols.map((col, i) => (
                <th className="cell"
                    style={{minWidth: col.width ? col.width : 'auto'}}
                    key={col.headerName}>
                  {col.headerName}
                </th>
              ))
            )}
          </tr>
        </thead>

        <tbody>
        { !!_rows.length && (
          _rows.map((row, ri) => (
            <tr key={rowKey ? row[rowKey] :`row-${ri + 1}`}>
              {cols.map((col, ci) => {
                const content = col.renderCell
                  ? col.renderCell(row, row[col.field]) : row[col.field];
                return <td key={rowKey ? `${col.headerName}-${row[rowKey]}` :`${col.headerName}-row-${ri + 1}`}>{content}</td>;
              })}
            </tr>
          ))
        )}
        </tbody>

      </table>
    </div>
  )
}