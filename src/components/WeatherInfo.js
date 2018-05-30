import React from 'react';
import './WeatherInfo.css';
import _ from 'lodash';

import Header from './Header'

const WeatherInfo = (props) => {

    let listItems = props.list.map((item, key) => (

        <tr key={key}>
            <td>{item.dt_txt}</td>
            <td>
                <img className={"pic"} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icon" />
            </td>
            <td>
                {item.weather[0].description}
            </td>
            <td>
                {_.round(item.main.temp, 1)} &#8451;
            </td>
        </tr>
    ))

    return (
        <div className={'weather-info'}>
            <Header city={props.city} />
            <table className='table'>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
}

export default WeatherInfo;