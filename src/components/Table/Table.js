import React from 'react';
import './Table.css';
import _ from "lodash";

import TableContent from "../TableContent/TableContent";

const Table = (props) => {

  let arrCpy = props.list.slice();

  console.log(arrCpy);

  const todayDate = new Date().toISOString().slice(0, 10);

  let todayWeather = arrCpy.filter(item => item.dt_txt.match(todayDate));

  // const tomorrowWeather = arrCpy.filter(item => item.dt_txt.match('2018-06-03'));
  
  // let grouped = arrCpy.map(item => (
  //   item.dt_txt == item.dt_txt.match(/^2018-06-02.*$/)
  // ))

  let tomorrowWeather = _.remove(arrCpy, function(n) {
    return n.dt_txt == n.dt_txt.match(/^2018-06-03.*$/);
  });
  
  console.log(tomorrowWeather);
  
  // let date = arrCpy.filter(item => item.dt_txt.split(' ').shift());
  // n.dt_txt === //

  // console.log(date);
  
  // let sth = _.remove(date, function(i) {
  //   return i === '';
  // });

  // console.log(sth);

  return (
    <div className="table-wrapper">
      <h2>{props.city.name ? `Weather in ${props.city.name}, ${props.city.country}:` : ''}</h2>
      <table className="table">
        <TableContent list={todayWeather} />
        <TableContent list={tomorrowWeather} />
      </table>
    </div>  
  )
}

export default Table;