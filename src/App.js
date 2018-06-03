import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Search from "./components/Search/Search";
import TableWrapper from "./components/TableWrapper/TableWrapper";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			city: [],
			list: [],
		};
	}

	changeHandler(e) {
		this.setState({search : e.target.value});
	}

	async getData() {
		const search = this.state.search;

		const APIKEY = `073cac7813564ec8027c23f467c3a8ac`;
		const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=${APIKEY}`;
		
		try {
			const resp = await axios.get(`${URL}`);
			this.setState({
				list: resp.data.list,
				city: resp.data.city,
			});
			
		} catch (error) {
			console.error(error);
		}
	}

	toConsole() {
		console.log(this.state.city);
		console.log(this.state.list);
	}

	render() {
		return (
			<div className="App">
				<Search 
					changeHandler={e => this.changeHandler(e)} 
					onClickData={() => this.getData()} 
					onClickConsole={() => this.toConsole()} 
				/>
				{this.state.list != '' && this.state.city != '' ? <TableWrapper city={this.state.city} list={this.state.list} /> : null}
			</div>
		)
	}
}

export default App;
