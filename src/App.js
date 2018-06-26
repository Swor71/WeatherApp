import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Search from "./components/Search/Search";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import DrawerMenu from "./components/AppBarTop/DrawerMenu/DrawerMenu";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      city: [],
      list: [],
      opened: false
    };
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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBarTop toggleDrawer={this.toggleDrawer} />
          <DrawerMenu
            toggleDrawer={this.toggleDrawer}
            opened={this.state.opened}
          />
          <Search
            changeHandler={this.changeHandler}
            onClickData={e => this.getData(e)}
          />

          <Route exact path="/" component={Welcome} />
          <Route
            path="/fiveDayWeather"
            render={() =>
              this.state.list != "" && this.state.city != "" ? (
                <FiveDayForecast
                  city={this.state.city}
                  list={this.state.list}
                />
              ) : null
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
