import React from 'react';
import './WeatherInfo.css';
import _ from 'lodash';

import Header from './Header'

const WeatherInfo = (props) => {
    
    let date = props.list.map(item => item.dt_txt.split(' ').shift());

    const chunked = _.chunk(props.list, 8);

    const sliced = _.slice(chunked, 0, 1);

    console.log(sliced);

    return (
        <div className={'weather-info'}>
            <Header city={props.city} />
            <table className='table'>
                <tbody>
                    {sliced.map((item, key) => (
                        <tr key={key}>
                            <td>{item[key].dt_txt}</td>
                            <td>
                                <img className={"pic"} src={`http://openweathermap.org/img/w/${item[key].weather[0].icon}.png`} alt="icon" />
                            </td>
                            <td>
                                {item[key].weather[0].description}
                            </td>
                            <td>
                                {_.round(item[key].main.temp, 1)} &#8451;
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WeatherInfo;