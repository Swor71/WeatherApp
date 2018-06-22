import React from "react";
import "./TableWrapper.css";
import _ from "lodash";

import TodayWeather from "../TodayWeather/TodayWeather";
import WeatherCard from "../WeatherCard/WeatherCard";

const TableWrapper = props => {
  let arrCpy = props.list.slice();

  const todayDate = new Date();
  const todayDateShort = todayDate.toISOString().slice(0, 10);

  let todayWeather = arrCpy.filter(item => item.dt_txt.match(todayDateShort));

  let otherDays = arrCpy.filter(item => !item.dt_txt.match(todayDateShort));
  let otherDaysChunked = _.chunk(otherDays, 8);

  let dayOne = otherDaysChunked.shift();
  let dayTwo = otherDaysChunked.shift();
  let dayThree = otherDaysChunked.shift();
  let dayFour = otherDaysChunked.shift();
  let dayFive = otherDaysChunked.shift();

  //Additional days as a simple workaroud to the problem of starting on day 6
  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ];

  const weekday = todayDate.getDay();

  return (
    <div className="container">
      <h1 className="place">{`${
        props.city.name
          ? `5-Day Weather Forecast for ${props.city.name}, ${
              props.city.country
            }:`
          : null
      }`}</h1>
      <div className="table-wrapper">
        {/* {todayWeather ? (
          <TodayWeather
            list={todayWeather}
            city={props.city}
            weekday={daysArr[weekday]}
          />
        ) : null} */}

        {dayOne ? (
          <WeatherCard
            list={dayOne}
            city={props.city}
            weekday={daysArr[weekday + 1]}
          />
        ) : null}

        {dayTwo ? (
          <WeatherCard
            list={dayTwo}
            city={props.city}
            weekday={daysArr[weekday + 2]}
          />
        ) : null}

        {dayThree ? (
          <WeatherCard
            list={dayThree}
            city={props.city}
            weekday={daysArr[weekday + 3]}
          />
        ) : null}

        {dayFour ? (
          <WeatherCard
            list={dayFour}
            city={props.city}
            weekday={daysArr[weekday + 4]}
          />
        ) : null}

        {dayFive ? (
          <WeatherCard
            list={dayFive}
            city={props.city}
            weekday={daysArr[weekday + 5]}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TableWrapper;
