import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

const TodayWeather = props => {
  const { todayWeather, city, daysArr, weekday } = props;

  return (
    <div className="container">
      <h1 className="place">{`${
        props.city.name
          ? `Today's Weather in ${props.city.name}, ${props.city.country}:`
          : null
      }`}</h1>
      {todayWeather ? (
        <WeatherCard
          list={todayWeather}
          city={city}
          weekday={daysArr[weekday]}
        />
      ) : null}
    </div>
  );
};

export default TodayWeather;
