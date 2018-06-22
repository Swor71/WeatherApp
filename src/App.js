import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Search from "./components/Search/Search";
import TableWrapper from "./components/TableWrapper/TableWrapper";
import AppBarTop from "./components/AppBarTop/AppBarTop";
import MenuDrawer from "./components/AppBarTop/MenuDrawer/MenuDrawer";

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

  toggleDrawer() {
    this.setState({
      opened: !this.state.opened
    });
  }

  changeHandler(e) {
    const val = e.target.value;
    this.setState({ search: val });
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

  render() {
    return (
      <div className="App">
        <AppBarTop toggleDrawer={() => this.toggleDrawer()} />
        <MenuDrawer
          toggleDrawer={() => this.toggleDrawer()}
          opened={this.state.opened}
        />
        <Search
          changeHandler={e => this.changeHandler(e)}
          onClickData={e => this.getData(e)}
        />
        {this.state.list != "" && this.state.city != "" ? (
          <TableWrapper city={this.state.city} list={this.state.list} />
        ) : null}
      </div>
    );
  }
}

export default App;
