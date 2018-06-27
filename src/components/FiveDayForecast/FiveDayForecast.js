import React from "react";
import "./FiveDayForecast.css";
import _ from "lodash";

import WeatherCard from "../WeatherCard/WeatherCard";

const FiveDayForecast = props => {
  const { otherDays, daysArr, weekday } = props;

  let otherDaysChunked = _.chunk(otherDays, 8);

  let dayOne = otherDaysChunked.shift();
  let dayTwo = otherDaysChunked.shift();
  let dayThree = otherDaysChunked.shift();
  let dayFour = otherDaysChunked.shift();
  let dayFive = otherDaysChunked.shift();

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

export default FiveDayForecast;