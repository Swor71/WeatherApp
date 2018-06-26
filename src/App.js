import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import _ from "lodash";
import { BrowserRouter, Route } from "react-router-dom";

import Search from "./components/Search/Search";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import DrawerMenu from "./components/AppBarTop/DrawerMenu/DrawerMenu";
import Welcome from "./components/Welcome/Welcome";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      city: [],
      list: [],
      opened: false,
      lat: null,
      lon: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: _.round(position.coords.latitude, 1),
        lon: _.round(position.coords.longitude, 1)
      });
    });
  }

  async componentDidUpdate() {
    const APIKEY = `073cac7813564ec8027c23f467c3a8ac`;
    const URL_GEO = `http://api.openweathermap.org/data/2.5/forecast?lat=${
      this.state.lat
    }&lon=${this.state.lon}&units=metric&APPID=${APIKEY}`;

    try {
      let resp = await axios.get(`${URL_GEO}`);
      this.setState({
        list: resp.data.list,
        city: resp.data.city
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getData(e) {
    e.preventDefault();
    const search = this.state.search;

    const APIKEY = `073cac7813564ec8027c23f467c3a8ac`;
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=${APIKEY}`;

    try {
      const resp = await axios.get(`${URL}`);
      this.setState({
        list: resp.data.list,
        city: resp.data.city
      });
    } catch (error) {
      console.error(error);
    }
  }

  toggleDrawer = () => {
    this.setState({
      opened: !this.state.opened
    });
  };

  changeHandler = e => {
    const val = e.target.value;
    this.setState({ search: val });
  };

  render() {
    const { list } = this.state;

    if (list) {
      let arrCpy = list.slice();

      const todayDate = new Date();
      const todayDateShort = todayDate.toISOString().slice(0, 10);

      let todayWeather = arrCpy.filter(item =>
        item.dt_txt.match(todayDateShort)
      );

      let otherDays = arrCpy.filter(item => !item.dt_txt.match(todayDateShort));

      const weekday = todayDate.getDay();

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

      return (
        <BrowserRouter>
          <div className="App">
            <AppBarTop toggleDrawer={this.toggleDrawer} />
            <DrawerMenu
              toggleDrawer={this.toggleDrawer}
              opened={this.state.opened}
            />

            <Route exact path="/" component={Welcome} />
            <Route
              path="/todayWeather"
              render={() => (
                <div>
                  <Search
                    changeHandler={this.changeHandler}
                    onClickData={e => this.getData(e)}
                  />
                  {this.state.list != "" && this.state.city != "" ? (
                    <TodayWeather
                      city={this.state.city}
                      list={this.state.list}
                      todayWeather={todayWeather}
                      daysArr={daysArr}
                      weekday={weekday}
                    />
                  ) : null}
                </div>
              )}
            />
            <Route
              path="/fiveDayWeather"
              render={() => (
                <div>
                  <Search
                    changeHandler={this.changeHandler}
                    onClickData={e => this.getData(e)}
                  />
                  {this.state.list != "" && this.state.city != "" ? (
                    <FiveDayForecast
                      city={this.state.city}
                      list={this.state.list}
                      otherDays={otherDays}
                      daysArr={daysArr}
                      weekday={weekday}
                    />
                  ) : null}
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
