import React, { Component } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import axios from 'axios';

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
		this.setState({city : e.target.value});
	}

	async getData() {
		const search = this.state.city;

		const APIKEY = `073cac7813564ec8027c23f467c3a8ac`;
		const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=${APIKEY}`;
		
		try {
			const resp = await axios.get(`${URL}`);
			this.setState({
				list: resp.data.list,
				city: resp.data.city,
			});
			// console.log(resp);
			
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
				<div className='search-area'>
					<input onChange={(e) => this.changeHandler(e)} />
					<button className='middle' onClick={() => this.getData()}>GET DATA!</button>
					<button onClick={() => this.toConsole()}>Show data</button>
				</div>
				<WeatherInfo city={this.state.city} list={this.state.list}/>
			</div>
		);
	}
}

export default App;
