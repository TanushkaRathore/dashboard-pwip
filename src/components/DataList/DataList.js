import { useState } from 'react';
import './DataList.css';
import Arrow from "./arrow.png"

function DataList(props) {
  const { headers, data, rowKeys } = props;
  const [order, setorder] = useState("asc");

  const sorting = (col) => {
    console.log(col)
    if (order === "asc") {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1);
      console.log(sorted)
      setorder("dsc")
    }
    if (order === "dsc") {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1);
      console.log(sorted)
      setorder("asc")
    }
  };
  console.log(data);


  return (
    <div className="dataList" >
      <table className="table">
        <thead className='tableHead'>
          <tr>
            {
              headers.length > 0 && headers.map((item, index) => (

                <th onClick={() => sorting(rowKeys[index])} key={index}>
                  <span>{item}</span>
                  <span><img src={Arrow} alt="" /></span>
                </th>


              ))
            }
          </tr>
        </thead>
        <tbody className='tableBody'>
          {
            data.length > 0 && data.map((row, index) => {
              return (
                <tr key={index}>
                  {
                    rowKeys.length > 0 && rowKeys.map((key, index) => (
                      <td key={index}>{row[key]}</td>
                    ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default DataList;