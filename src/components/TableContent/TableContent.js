import React from 'react';
import PropTypes from 'prop-types';
import './TableContent.css';

import _ from "lodash";

const TableContent = (props) => {
    return (
        <table className='table'>
            <caption>{props.list[0].dt_txt.split(' ').shift()}</caption>
            <thead>
                <tr>
                    <th>Hour</th>
                    <th>Symbol</th>
                    <th>Description</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((item, key) => (
                        <tr key={key}>
                            <td>{item.dt_txt.split(' ').pop()}</td>
                            <td><img className={"pic"} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icon" /></td>
                            <td>{item.weather[0].description}</td>
                            <td>{_.round(item.main.temp, 1)} &#8451;</td>
                        </tr>
                    ))
                } 
            </tbody>
        </table>
    )
}

TableContent.propTypes = {
    list: PropTypes.array,
};

export default TableContent;