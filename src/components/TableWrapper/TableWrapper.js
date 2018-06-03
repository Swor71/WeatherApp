import React from 'react';
import './TableWrapper.css';
import _ from "lodash";

import TableContent from "../TableContent/TableContent";

const TableWrapper = (props) => {

  let arrCpy = props.list.slice();

  const todayDate = new Date().toISOString().slice(0, 10);

  let todayWeather = arrCpy.filter(item => item.dt_txt.match(todayDate));
  
  let otherDays = arrCpy.filter(item => !item.dt_txt.match(todayDate));

  let otherDaysChunked = _.chunk(otherDays, 8);

  let dayOne = otherDaysChunked.shift();
  let dayTwo = otherDaysChunked.shift();
  let dayThree = otherDaysChunked.shift();
  let dayFour = otherDaysChunked.shift();
  let dayFive = otherDaysChunked.shift();

  return (
    <div>
      <h1 className='place'>{props.city.name ? `Weather in ${props.city.name}, ${props.city.country}:` : null}</h1>
      <div className="table-wrapper">
        {todayWeather ? <TableContent list={todayWeather} /> : null}
        {dayOne ? <TableContent list={dayOne} /> : null}
        {dayTwo ? <TableContent list={dayTwo} /> : null}
        {dayThree ? <TableContent list={dayThree} /> : null}
        {dayFour ? <TableContent list={dayFour} /> : null}
        {dayFive ? <TableContent list={dayFive} /> : null}
      </div>
    </div>  
  )
}

export default TableWrapper;